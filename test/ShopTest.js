import {ShopPage} from "../page/ShopPage.js";

console.log("Shop Test Started");
const page = new ShopPage();
await page.browserOpen("https://demowebshop.tricentis.com/");
await page.clickProductLink();
await page.clearProductCount();
await page.enterProductCount("2");
await page.clickAddToCartButton();
await page.clickShoppingCartLink();
await page.browserClose();