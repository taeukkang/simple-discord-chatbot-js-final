import { MessageEmbed } from "discord.js";

export default async function vote(message, args) {
  const voteEmojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];

  const question = args.shift();

  if (args.length < 1 || args.length > 5) {
    message.reply("One to five options are required. 선택 항목은 1-5개만 지원합니다.");
  }

  const embed = new MessageEmbed();

  let description = "";
  args.forEach((arg, i) => {
    description += `${voteEmojis[i]}: ${arg}\n`;
  });

  embed.setTitle("🗳 " + question);
  embed.setDescription(description);

  const vote = await message.reply("Vote", { embed: embed });
  args.forEach(async (arg, i) => {
    await vote.react(voteEmojis[i]);
  });
}
