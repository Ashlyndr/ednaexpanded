const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

process.env.PRODUCT_VERSION = '901912'; // Set the Chromium version to use

(async () => {
  const executablePath = await chrome.executablePath;
  console.log('Executable path: ', executablePath); // Check the version number in the path

  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
    ],
    executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
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
    });
  } catch (error) {
    console.error(error);
  }

})();
