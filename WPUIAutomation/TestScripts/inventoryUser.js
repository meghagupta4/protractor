const common = require('../Utilities/common-functions.js');
const data = require('../Utilities/login-credentials.js');
const obj = require('../Datasheets/inventoryUser-data');

describe("Validate Invertory User testcases", function () {
  browser.manage().window().maximize();
  browser.manage().timeouts().implicitlyWait(15000)

  beforeAll(() => {
    common.login();
  })

  /*afterAll(() => {
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

  it("Testcase 2- Create Inventory User", function () {

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
    element(by.xpath("//input[@id='firstName']")).sendKeys(obj.data2.firstName);
    element(by.xpath("//input[@id='lastName']")).sendKeys(obj.data2.lastName);
    element(by.xpath("//input[@id='sso']")).sendKeys(obj.data2.sso);
    element(by.xpath("//input[@id='email']")).sendKeys(obj.data2.email);
    element(by.xpath("//input[@id='phone']")).sendKeys(obj.data2.phoneNo);
    browser.sleep(5000);
    element(by.css("input[formcontrolname='companyOwner']")).sendKeys(obj.data2.companyOwner);
    element(by.css("input[formcontrolname='productLine']")).sendKeys(obj.data2.productLine);
    element(by.xpath("//*[@formcontrolname='isInventoryUser']")).click();
    browser.sleep(3000);
    let duns = element(by.xpath("//*[@formcontrolname='duns']"));
    duns.click();
    duns.sendKeys(obj.data2.duns);
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
    region.sendKeys(obj.data2.region);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      browser.sleep(5000);
    });

    let country = element(by.xpath("//*[@id='mat-input-12']"));
    country.click();
    country.sendKeys(obj.data2.country);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      browser.sleep(5000);
    });

    let state = element(by.xpath("//*[@id='mat-input-13']"));
    state.click();
    state.sendKeys(obj.data2.state);
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      browser.sleep(5000);
    });

    browser.sleep(3000);
    element(by.buttonText("SAVE")).click();
    browser.sleep(5000);

    let alert = element(by.css(".member-success-text"));
    alert.getText().then(function (text) {
      console.log(text);
      expect(text).toBe("User updated successfully.")
    });




  });


  //describe
});