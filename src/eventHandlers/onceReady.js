import isUp from "is-up";

async function onceReady(client) {
  console.log("onceReady!");

  setInterval(function () {
    checkWebStatus(client);
  }, 3000);
}

const channelId = ""; // Enter your channel ID
const url = "";

async function checkWebStatus(client) {
  
  console.log("Checking website status...");
  const result = await isUp(url);

  if (result) {
    console.log("Status ok.");
  } else {
    console.log("Status error!");
    client.channels.cache
      .get(channelId)
      .send("⚠️ Error — website is down. 웹사이트 접속이 불가합니다. 상태를 확인해 주세요.");
  }
}

export default onceReady;
