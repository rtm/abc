// Page object for sign-in page, including Firebase UI stuff, which should probabby be moved somewhere else.

import {browser, element, by} from "protractor";

export class PageObject {
  async navigateTo() {
    //    return browser.get("#/user/sign-in");
    return await browser.get("/");
  }

  public async signInWithEmail() {
    const signInWithEmailButton = element(by.css(".firebaseui-idp-password"));
    return await signInWithEmailButton.click();

    // const emailInput = element(by.css("input.firebaseui-id-email"));
    // emailInput.sendKeys(TEST_EMAIL);

    // const nextButton = element(by.css("button.firebaseui-id-submit"));
    // nextButton.click();

    // // WHy is this sleep necessary?
    // browser.sleep(5000);
    // const passwordInput = element(by.css("input.firebaseui-id-password"));
    // passwordInput.sendKeys(TEST_PASSWORD);

    // const signInButton = element(by.css("button.firebaseui-id-submit"));
    // signInButton.click();
  }
}
