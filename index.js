const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiCanvas } = require("aoi.canvas");
require('dotenv').config();

const client = new AoiClient({
  token: process.env.TOKEN,
  prefix: ".",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ['main', 'user', 'messageVar'],
    securityKey: "1f9f0f854f01567e61aa07c58531871c",
  }
});
const canvas = new AoiCanvas(client);

const loader = new LoadCommands(client);
loader.load(client.cmd, "./bot")

require('./clientVariables.js')(client);
require('./customFunctions.js')(client);