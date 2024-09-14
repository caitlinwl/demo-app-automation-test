# demo-app-automation-test
My Demo App Mobile Automation Test in Webdriver IO using TypeScript and Cucumber (Gherkin)

Pre-requisites:
- Visual Studio Code
- node.js
- Android Studio (set up and run an emulated device using Device Manager) 

In [wdio.conf.ts](wdio.conf.ts) update the `capabilities` to match the device emulator you have set up.

All the tests are set to run but if you wan to run a specific test, update the `tagExpression` in [wdio.conf.ts](wdio.conf.ts) with the test you want to run for example:
tagExpression: '@login',

To install wdio:
- `npm init wdio .`

To run the tests, execute the following in the terminal:
- `npx wdio wdio.conf.ts`
OR you can also run a test using:
- `npm run wdio`

To generate an allure report, execute the following in the terminal:
- `allure serve`