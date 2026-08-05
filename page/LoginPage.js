import { By } from "selenium-webdriver";
import { BasePage } from "./base.js";

class LoginPage extends BasePage {
    constructor() {
        super();
        // Define locators for the elements on the login page
        this.loginLink = By.xpath('//a[@href="/login"]');
        this.emailInput = By.id('Email');
        this.passwordInput = By.id('Password');
        this.loginButton = By.xpath('//input[@value="Log in"]');
    }

    // Define methods to interact with the elements on the login page
    async clickLoginLink() {
        await this.driver.findElement(this.loginLink).click();
    }
    
    async enterEmail(email) {
        await this.driver.findElement(this.emailInput).sendKeys(email);
    }   
    
    async enterPassword(password) {
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.findElement(this.loginButton).click();
    }
}

export {LoginPage};