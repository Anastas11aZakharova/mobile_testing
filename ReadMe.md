# WebdriverIO for mobile testing

## Latest test results
Available at https://anastas11azakharova.github.io/mobile_testing/ 

## summary
5 test cases for a sample andriod app (Android-NativeDemoApp-0.4.0) website using WebDriverIO framework and PageObjectModel pattern
Covered Click, Swipe and Tap scenarios

GitHub actions configured to use secrets for credentials and to run tests on 2 devices jobs in parallel:
1. Google Pixel 3
2. Samsung Galaxy S23 Ultra

## requirements:
- npm

## steps to install:
1. Clone repository
2. ``` npm install ```
3. Upload app Android-NativeDemoApp to browserstack using API ([Link](https://www.browserstack.com/docs/app-automate/api-reference/appium/apps#upload-an-app)) and add unique ID to the wdio.conf.js as well as credentials for browserstack

## steps to launch:
```
npm run wdio
npm run wdio-samsung
```

## steps to generate report
```
npm run generate-report
npm run open-report
```
