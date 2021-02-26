// Load config file
// 설정 파일(config.json)을 불러옴
import config from "./config.json";

// Import Discord.js
// Discord.js를 불러옴
import Discord from "discord.js";
import onceReady from "./eventHandlers/onceReady";
import onMessage from "./eventHandlers/onMessage";

// Create a new Discord.js client
// 새로운 Discord.js Client를 생성함
const client = new Discord.Client();

// Log in to Discord (as a bot) using the client with token set in config
// 설정 파일에 저장되어있는 토큰으로 클라이언트를 사용해 Discord에 봇으로 로그인함
client.login(config.discordBotToken);

// Emitted when the client becomes ready to start working
// 클라이언트가 준비되면 발생되는 이벤트
client.once("ready", () => {
  onceReady(client);
});

// Emitted when a new message is received
// 새 메시지가 수신되면 발생되는 이벤트
client.on("message", onMessage);
