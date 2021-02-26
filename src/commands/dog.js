import axios from "axios";

export default async function dog(message, args) {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");

    message.reply(response.data.message);
}
