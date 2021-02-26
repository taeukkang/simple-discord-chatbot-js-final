export default function hello(message, args) {
  message.reply("Hello " + args.join(","));
}
