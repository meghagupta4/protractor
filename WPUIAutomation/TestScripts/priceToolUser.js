const { browser, element } = require('protractor');
const common = require('../Utilities/common-functions.js');
const data = require('../Utilities/login-credentials.js');
const obj = require('../Datasheets/priceToolUser-data');
//let EC = protractor.ExpectedConditions;

describe("Validate PriceTool User testcases", function () {
  browser.manage().window().maximize();
  browser.manage().timeouts().implicitlyWait(15000)

  beforeAll(() => {
    common.login();
  })

 /* afterAll(() => {
    browser.quit();
  });*/

  it("Testcase 1- Validate login the application", function () {

    browser.getCurrentUrl().then(function (currentUrl) {
      console.log(currentUrl);
      expect(currentUrl).toEqual(data.datadriver.URL);
    });

    common.GDPR_Compliance();
    browser.sleep(20000);
    common.cookie_Consent();
    browser.sleep(10000);

  });

  it("Testcase 2- Create Pricetool User", function () {

    browser.sleep(10000);
    let admin = element(by.xpath("/html/body/wcp-root/div/wcp-shell/div/div[2]/wcp-top-menu-bar/div/div[4]/div"));
    browser.wait(ExpectedConditions.elementToBeClickable(admin), 20000);
    browser.executeScript("arguments[0].click()", admin);
    browser.sleep(20000);

    let usermanagement = element(by.xpath("//div[@class='mat-menu-content']/div[2]"));
    browser.wait(ExpectedConditions.elementToBeClickable(usermanagement), 20000);
    browser.executeScript("arguments[0].click()", usermanagement);
    browser.sleep(20000);


    element(by.xpath("//button[@class='wp-btn wp-primary-btn wp-btn-small wp-btn-text-icon ng-star-inserted']")).click();
    browser.sleep(10000);

    element(by.xpath("//input[@id='firstName']")).sendKeys(obj.data1.firstName);
    element(by.xpath("//input[@id='lastName']")).sendKeys(obj.data1.lastName);
    element(by.xpath("//input[@id='sso']")).sendKeys(obj.data1.sso);
    element(by.xpath("//input[@id='email']")).sendKeys(obj.data1.email);
    element(by.xpath("//input[@id='phone']")).sendKeys(obj.data1.phoneNo);
    browser.sleep(5000);
    element(by.css("input[formcontrolname='companyOwner']")).sendKeys(obj.data1.companyOwner);
    element(by.css("input[formcontrolname='productLine']")).sendKeys(obj.data1.productLine);
    element(by.xpath("//*[@formcontrolname='isPriceToolUser']")).click();
    browser.sleep(3000);
    let duns = element(by.xpath("//*[@formcontrolname='duns']"));
    duns.click();
    duns.sendKeys(obj.data1.duns);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      browser.sleep(5000);
    });

    let company = element(by.xpath("//*[@formcontrolname='company']"));
    company.click();
    let value = element(by.xpath("//*[@ng-reflect-value='Internal User']"));
    value.click();
    browser.sleep(3000);

    let region = element(by.xpath("//*[@id='mat-input-11']"));
    region.click();
    region.sendKeys(obj.data1.region);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      browser.sleep(2000);
    });

    let country = element(by.xpath("//*[@id='mat-input-12']"));
    country.click();
    country.sendKeys(obj.data1.country);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      browser.sleep(2000);
    });

    let state = element(by.xpath("//*[@id='mat-input-13']"));
    state.click();
    state.sendKeys(obj.data1.state);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      browser.sleep(2000);
    });

    browser.sleep(5000);
    element(by.buttonText("SAVE")).click();

    browser.sleep(5000);

    let alert = element(by.css(".member-success-text"));
    alert.getText().then(function (text) {
      console.log(text);
      expect(text).toBe("User updated successfully.")
    });


  });

  it("Testcase 3- Edit Price Tool User", () => {

    browser.sleep(10000);
    element(by.xpath("//input[@ng-reflect-name='sso']")).sendKeys(obj.data1.sso);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      browser.sleep(10000);
    });

    let ele = element.all(by.xpath("//*[@class='mat-checkbox-layout']")).first();
    ele.click();
    element(by.buttonText("Edit")).click();

    browser.sleep(5000);

    element(by.xpath("//input[@id='firstName']")).getText().then((fname) => {
      expect(fname).toEqual(obj.data1.firstName);
    });
    browser.sleep(3000);
    element(by.xpath("//input[@id='lastName']")).getText().then((lname) => {
      expect(lname).toEqual(obj.data1.lastName);
    });
    browser.sleep(3000);
    element(by.xpath("//input[@id='sso']")).getText().then((sso) => {
      expect(sso).toEqual(obj.data1.sso);
    });
    browser.sleep(3000);
    element(by.xpath("//input[@id='email']")).getText().then((email) => {
      expect(email).toEqual(obj.data1.email);
    });
    browser.sleep(3000);
    element(by.xpath("//input[@id='phone']")).getText().then((phone) => {
      expect(phone).toEqual(obj.data1.phoneNo);
    });

    browser.sleep(3000);
    //Update phonenumber
    element(by.xpath("//input[@id='phone']")).clear();
    element(by.xpath("//input[@id='phone']")).sendKeys("12345678");
    browser.sleep(2000);
    element(by.xpath("//div[@class='dialog-footer']/button[2]")).click();
    browser.sleep(5000);
    let alert = element(by.css(".member-success-text"));
    alert.getText().then(function (text) {
      console.log(text);
      expect(text).toBe("User updated successfully.")
    });

  });



  //describe
});