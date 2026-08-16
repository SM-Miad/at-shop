import {By} from "Selenium-webdriver";
import {BasePage} from "./base.js";

class ShopPage extends BasePage {
    constructor() {
        super();
        // Define locators for the elements on the shop page
        this.productLink = By.xpath('//a[@href="/25-virtual-gift-card"]');
        this.productCount = By.id("addtocart_2_EnteredQuantity");
        this.addToCartButton = By.id("add-to-cart-button-2");
        this.shoppingCartLink = By.xpath('//a[@href="/cart"]');
    } 

    // Define methods to interact with the elements on the shop page

    async clickProductLink() {
        await this.driver.findElement(this.productLink).click();
    }

    async clearProductCount() {
        await this.driver.findElement(this.productCount).clear();
    }

    async enterProductCount(count) {
        await this.driver.findElement(this.productCount).sendKeys(count);
    }

    async clickAddToCartButton() {
        await this.driver.findElement(this.addToCartButton).click();
    }

    async clickShoppingCartLink() {
        await this.driver.findElement(this.shoppingCartLink).click();
    }
}

export {ShopPage};