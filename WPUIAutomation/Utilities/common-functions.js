const data = require('./login-credentials.js');

const obj = {

    login: ()=>{
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().pageLoadTimeout(30000)  ;
        browser.get(data.datadriver.URL);
        element(by.id("identifierInput")).sendKeys(data.datadriver.SSO);
        element(by.id("post-button")).click();
        element(by.id("password")).sendKeys(data.datadriver.PASSWORD);
        element(by.id("remember-me-login-button")).click();
    },

    GDPR_Compliance: ()=>{
        element(by.buttonText('I Agree')).click();
        browser.sleep(4000);
    },

    cookie_Consent: ()=>{
        element(by.buttonText('Accept All Cookies')).click();
        browser.sleep(4000);
    }

}

module.exports = obj;

