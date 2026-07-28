import { Builder, Browser } from 'selenium-webdriver';

class Base {
  constructor() {
    this.driver = new Builder().forBrowser(Browser.CHROME).build();
  }

  async browserOpen(url) {
    await this.driver.get(url);
  }

  async browserClose() {
    await this.driver.quit();
  }
}
const pages = new Base();
pages.browserOpen('https://demowebshop.tricentis.com/');