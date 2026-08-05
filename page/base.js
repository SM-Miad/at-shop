import { Builder, Browser } from 'selenium-webdriver';
console.log("Base page loaded");
class BasePage {
  constructor() {
    this.driver = new Builder()
    .forBrowser(Browser.CHROME)
    .build();
  }

  //Browser actions

  async browserOpen(url) {
    await this.driver.get(url);
  }

  async browserClose() {
    await this.driver.quit();
  }

}

export {BasePage};