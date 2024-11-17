const { resolveColor, MessageFlags, AttachmentBuilder, ComponentType, ButtonStyle } = require("discord.js");
const SlashOption = require("./slashOption.js");
const { mustEscape } = require("../core/mustEscape.js");
const { ButtonStyleOptions } = require("../utils/Constants.js");
const { CreateObjectAST } = require("../core/functions.js");
const { Time } = require("../core/Time.js");

// Matches parser with args
// {parser:...}
const Checker = (content, parser) => content.includes(`{${parser}:`);

// Matches single parser
// {parser}
const SingleChecker = (content, parser) => content.includes("{" + parser + "}");

const extractParser = (content, parser, more) => (more ? content.split(`{${parser}:`)[1].split("}")[0].split(":") : content.split(`{${parser}:`)[1].split("}")[0].addBrackets().trim());

const EmbedParser = async (message, attachments = []) => {
    message = mustEscape(message);

    const embeds = [];

    let messages = message.split("{newEmbed:").slice(1);
    for (let content of messages) {
        content = content.slice(0, content.length - 1);

        const embed = {};
        embed.fields = [];

        // Adiciona imagem a partir de uma URL
        if (Checker(content, "image")) {
            const imageUrl = extractParser(content, "image");
            embed.image = {
                url: imageUrl
            };
        }

        // Adiciona imagem a partir de anexos, se houver a chave {attachment}
        if (SingleChecker(content, "attachment")) {
            const attachment = attachments.find(att => att.name && att.name.endsWith(".png") || att.name.endsWith(".jpg") || att.name.endsWith(".jpeg"));
            if (attachment) {
                embed.image = {
                    url: `attachment://${attachment.name}`
                };
            }
        }

        embeds.push(embed);
    }

    return embeds;
};

module.exports = { EmbedParser };
