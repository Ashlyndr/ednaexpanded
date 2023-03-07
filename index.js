const puppeteer = require('puppeteer');
const chrome = require('chrome-aws-lambda');

(async () => {
  console.log('Launching browser with headless: true...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    ignoreHTTPSErrors: true,
    headless: true,
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
    ],
  });
  
  
  const page = await browser.newPage();

  console.log('Opening website in headless mode...');
  await page.goto('https://www.bondage-europe.com/R89/BondageClub/4940484098.html', {
    waitUntil: 'networkidle2',
    timeout: 60000, 
  });
  
  console.log('Running JavaScript code in headless mode...');
  try {
    await page.evaluate(() => {
        ServerSend("AccountLogin", { AccountName: "SSS777", Password: "S" });

        setTimeout(() => {
        // Update Room Data
        CommonSetScreen("Online", "ChatSearch");
        ChatRoomPlayerCanJoin = true;
        ServerSend("ChatRoomCreate", {
          Name: "TVC",
          Description: "Discord, BC Cheat Codes, Minecraft BDSM Roleplay Servers. Link in Description~",
          Background: "SecretChamber",
          Private: true,
          Locked: false,
          Space: "",
          Game: "",
          Admin: "",
          Ban: [],
          Limit: 10,
          BlockCategory: []
        });
    }, 1000);
    setTimeout(() => {
        ChatRoomData.Name = "TVC"
        ChatRoomData.Background = "SecretChamber"
        ChatRoomData.Description = "Discord, BC Cheat Codes, Minecraft BDSM Roleplay Servers. Link in Description~"
        ChatRoomData.Limit = "10"
        ChatRoomData.Ban = ""
            var UpdatedRoom = {
                Name: ChatRoomData.Name,
                Description: ChatRoomData.Description,
                Background: ChatRoomData.Background,
                Limit: ChatRoomData.Limit,
                Admin: ChatRoomData.Admin,
                Ban: ChatRoomData.Ban,
                Private: true,
                Locked: false,
            Language: "EN"
            };
          ChatRoomPlayerCanJoin = true;
            ServerSend("ChatRoomAdmin", { MemberNumber: Player.ID, Room: UpdatedRoom, Action: "Update" });
            ChatAdminMessage = "UpdatingRoom";
        }, 1200);

            });
  } catch (error) {
    console.error(error);
  }

})();
