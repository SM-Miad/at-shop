import { By } from "selenium-webdriver";
import { BasePage } from "./base.js";

class SignUpPage extends BasePage {

    constructor() {
        super();
        // Define locators for the elements on the sign-up page
        this.registerLink = By.xpath('//a[@href="/register"]');
        this.genderRadioButton = By.id('gender-male');
        this.firstNameInput = By.id('FirstName');
        this.lastNameInput = By.id('LastName');
        this.emailInput = By.id('Email');
        this.passwordInput = By.id('Password');
        this.confirmPasswordInput = By.id('ConfirmPassword');
        this.registerButton = By.name('register-button');
    }

    // Define methods to interact with the elements on the sign-up page

    async clickRegisterLink() {
        await this.driver.findElement(this.registerLink).click();
    }  

    async selectGender() {
        await this.driver.findElement(this.genderRadioButton).click();
    }

    async enterFirstName(firstName) {
        await this.driver.findElement(this.firstNameInput).sendKeys(firstName);
    }

    async enterLastName(lastName) {
        await this.driver.findElement(this.lastNameInput).sendKeys(lastName);
    }

    async enterEmail(email) {
        await this.driver.findElement(this.emailInput).sendKeys(email);
    }

    async enterPassword(password) {
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async enterConfirmPassword(confirmPassword) {
        await this.driver.findElement(this.confirmPasswordInput).sendKeys(confirmPassword);
    }

    async clickRegisterButton() {
        await this.driver.findElement(this.registerButton).click();
    }
}

// Export the SignUpPage class for use in other files
export {SignUpPage};