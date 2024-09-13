import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import AboutPage from '../pageobjects/about.page.js';
import ProductPage from '../pageobjects/product.page.js';
import allure from '@wdio/allure-reporter';

Then(/^I click About in the hamburger menu$/, async () => {
    await (AboutPage.aboutMenuItem).click();
    allure.addStep("About menu item was clicked");
});

Then(/^I should see the About page displayed$/, async () => {
    await expect(AboutPage.myDemoApp).toBeDisplayed();
    await expect(AboutPage.saucelabs).toBeDisplayed();
    allure.addStep("About page is displayed and page has loaded");
});

Then(/^I see the Saucelabs Website link is visible$/, async () => {
    await expect(AboutPage.saucelabsWebsiteLink).toBeDisplayed();
    allure.addStep("Saucelabs Website Link is displayed");
});

Then(/^I click the catalog link in the hamburger menu$/, async () => {
    await (ProductPage.catalogLink).click();
    await expect(ProductPage.productsHeading).toBeExisting();
    allure.addStep("Catalog link was clicked in the hamburger menu and the product page is displayed");
});