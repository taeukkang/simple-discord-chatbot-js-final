import dog from "../commands/dog";
import hello from "../commands/hello";
import vote from "../commands/vote";

async function onMessage(message) {
  const prefix = "!"; // 접두사

  if (message.author.bot || !message.content.startsWith(prefix)) {
    return;
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "안녕":
    case "hello":
      hello(message, args);
      break;

    case "투표":
    case "vote":
      vote(message, args);
      break;

    case "강아지":
    case "dog":
      dog(message, args);
      break;

    default:
      message.reply("Error! Unrecognized command. 오류! 미등록 명령어입니다.");
  }
}

export default onMessage;
