const puppeteer = require("puppeteer");
const fs = require("fs");

const shoesArray = [];

const scraper = async (url) => {
  console.log(url);

  const browser = await puppeteer.launch({
    headless: false, 
    defaultViewport: null,
    args: ['--window-size=1580,1024'] 
  });

  const page = await browser.newPage();

  await page.goto(url, {waitUntil: 'load', timeout: 0});

  try {
    await page.waitForSelector("#shopify-pc__banner__btn-decline", {visible: true});
    await page.click("#shopify-pc__banner__btn-decline");
    console.log("Ventana de cookies cerrada sin aceptarlas.");
  } catch (error) {
      console.log("No apareció la ventana de cookies.");
    };

    await page.waitForSelector(".header__menu-disclosure", {visible: true});
    await page.click(".header__menu-disclosure");
    console.log("Accediendo a los árticulos de hombre");

  repeat(page, browser);
};

  const repeat = async (page, browser) => {
  const arrayContainers = await page.$$(".product-card");

  for (const shoeContainer of arrayContainers) {
    let price = await shoeContainer.$eval(".notranslate.ht-money", (element) => element.textContent);
    let title = await shoeContainer.$eval(".product-title", (element) => element.textContent);
    let img = await shoeContainer.$eval("img", (element) => element.src);

    const shoe = {title, price, img};
      
    shoesArray.push(shoe);
  };

  const nextLink = await page.$('a[rel="next"]');

  if (nextLink) {
    const url = await nextLink.evaluate(el => el.href);
    console.log(`Página actual scrapeda. Llevamos ${shoesArray.length} productos.`);

    await page.goto(url);
    await repeat(page, browser);
  } else {
      console.log(`Última página scrapeda. Total de productos: ${shoesArray.length} Escribiendo JSON...`);
      write(shoesArray);
      await browser.close();
  };
};

  const write = (shoesArray) => {
    fs.writeFile("shoes.json", JSON.stringify(shoesArray), () => {
      console.log("Archivo escrito");
    });
  };

module.exports = { scraper };