import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get catalogLink () {
        return $('//android.widget.TextView[@text="Catalog"]');
    }

    public get productsHeading () {
        return $('//android.widget.TextView[@text="Products"]');
    }

    public get productSauceLabsBackpack () {
        return $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]');
    }

    public get sauceLabsBackpackHeading () {
        return $('//android.widget.TextView[@text="Sauce Labs Backpack"]');
    }

    public get sauceLabsBackpackImg () {
        return $('//android.widget.ScrollView[@content-desc="product screen"]/android.view.ViewGroup/android.widget.ImageView');
    }

    public get addToCartBtn () {
        return $(`~Add To Cart button`);
    }

    public get oneItem () {
        return $('(//android.widget.TextView[@text="1"])[1]');
    }

    public get shoppingCartIcon () {
        return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView');
    }

    public get sauceLabsBackPackTxt () {
        return $(`~product label`);
    }

    public get proceedToCheckout () {
        return $('//android.widget.TextView[@text="Proceed To Checkout"]');
    }
    
}

export default new ProductsPage();
