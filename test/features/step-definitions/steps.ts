import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js';
import allure from '@wdio/allure-reporter';

Given(/^My Demo app has loaded$/, async () => {
    await expect(LoginPage.myDemoAppLogo).toBeExisting();
    allure.addStep("My Demo App Logo has been found");
});

When(/^I click to expand the hamburger menu$/, async () => {
    await (LoginPage.hamburgerMenu).click();
    allure.addStep("Hamburger menu was clicked");
});