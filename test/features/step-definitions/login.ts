import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js';
import allure from '@wdio/allure-reporter';

Then(/^I click the Login Menu item and login with (.*) and (.+)$/, async (username: string, password: string) => {
    await (LoginPage.loginMenuItem).click();
    allure.addStep("Login menu item was clicked");
    await expect(LoginPage.loginHeading).toBeDisplayed();
    await LoginPage.login(username, password);
    allure.addStep("I have entered my login details and have clicked the login button");
});