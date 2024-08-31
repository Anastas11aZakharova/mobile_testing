export const config = {
    user: process.env.BROWSERSTACK_USERNAME || 'anastasiia_LIjnP1',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'Q78r7w8n1SRTfiqxnUT4',
  
    updateJob: false,
    specs: [
      './test/specs/**.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Samsung Galaxy S23 Ultra',
      app: process.env.BROWSERSTACK_APP_ID || 'bs://735756bad68ce38176105b7da1f2959ad2b94620',
      'browserstack.debug': true
    }],
    reporters: [['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }]], 
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };