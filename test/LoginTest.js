import {LoginPage} from "../page/LoginPage.js";

const page = new LoginPage();
await page.browserOpen("https://demowebshop.tricentis.com/");
await page.clickLoginLink();
await page.enterEmail("mehedi220802@gmail.com");
await page.enterPassword("123456");
await page.clickLoginButton();
await page.browserClose();