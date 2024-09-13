import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import ProductPage from '../pageobjects/product.page.js';
import allure from '@wdio/allure-reporter';

When(/^I click on the first product in the app catalog$/, async () => {
    await expect(ProductPage.productsHeading).toBeExisting();
    await (ProductPage.productSauceLabsBackpack).click();
    allure.addStep("Sauce Labs Backpack was clicked");
});

Then(/^I should be able to view the product$/, async () => {
    await expect(ProductPage.sauceLabsBackpackHeading).toHaveText("Sauce Labs Backpack");
    await expect(ProductPage.sauceLabsBackpackImg).toBeDisplayed();
    allure.addStep("Able to view the Sauce Labs Backpack");
});

Then(/^I click the add to cart button$/, async () => {
    await (ProductPage.addToCartBtn).click();
    await expect(ProductPage.oneItem).toBeDisplayed();
    allure.addStep("Clicked the add to cart button and the shopping cart icon shows 1 item");
});

Then(/^I click the shopping cart icon$/, async () => {
    await (ProductPage.shoppingCartIcon).click();
    allure.addStep("Shopping cart icon was clicked");
});

Then(/^I am able to view the item in my shopping cart$/, async () => {
    await expect(ProductPage.sauceLabsBackPackTxt).toBeDisplayed();
    await expect(ProductPage.proceedToCheckout).toBeDisplayed();
    allure.addStep("Able to see the item in my Shopping cart and the page is displaying correctly");
});