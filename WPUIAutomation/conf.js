// An example configuration file.
const { browser } = require('protractor');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',
 // specs: ['./TestScripts/priceToolUsercopy.js','./TestScripts/inventoryUser.js'],
 specs: ['./TestScripts/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './test/reports/',
        fileName: 'WP-Regression',
        fileNameSeparator: '-',
        fileNameDateSuffix: true,
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,
        cleanDestination: true
      })
    );
  }
};
