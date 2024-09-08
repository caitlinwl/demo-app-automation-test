import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get loginMenuItem () {
        return $(`~menu item log in`); // Use the `~` symbol for accessibility IDs
    }

    public get loginHeading () {
        return $('(//android.widget.TextView[@text="Login"])[1]');
    }

    public get inputUsername () {
        return $(`~Username input field`);
    }

    public get inputPassword () {
        return $(`~Password input field`);
    }

    public get btnLogin () {
        return $(`~Login button`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
    
}

export default new LoginPage();
