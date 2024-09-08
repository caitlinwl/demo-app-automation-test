import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AboutPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get aboutMenuItem () {
        return $(`~menu item about`);
    }

    public get aboutHeading () {
        return $('//android.widget.TextView[@text="About"]');
    }

    public get myDemoApp () {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[1]');
    }

    public get saucelabs () {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[2]');
    }

    public get saucelabsWebsiteLink () {
        return $('//android.widget.TextView[@text="Go to the Sauce Labs website."]');
    }
    
}

export default new AboutPage();
