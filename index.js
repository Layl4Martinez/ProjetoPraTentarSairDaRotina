const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: "MTI3OTk1Mjk5MjI3NTI2NzY3NQ.Gbfpg0.b0V6Zpy4ILYAvsyXP_s1Cfhzkj5rdhSsGRrCX0",
  prefix: ".",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ['main', 'user'],
    securityKey: "1f9f0f854f01567e61aa07c58531871c",
  }
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./bot")

client.variables({
  'lowDailyValue': 876,
  'highDailyValue': 2666,
}, 'main')

client.variables({
  'coins': 0,
}, 'user')

