const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: process.env.CLIENT_TOKEN,
  prefix: ".",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "1f9f0f854f01567e61aa07c58531871c",
  }
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./bot")