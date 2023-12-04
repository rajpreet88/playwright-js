// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },

  reporter: 'html',
  //   [
  //   ['playwright-html', {
  //     testFolder: 'tests',
  //     title: 'Playwright HTML Report',
  //     project: 'QA Tests',
  //     release: '9.87.6',
  //     testEnvironment: 'DEV',
  //     embedAssets: true,
  //     embedAttachments: true,
  //     outputFolder: 'playwright-html-report',
  //     minifyAssets: true,
  //     startServer: false,
  //   }]
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',//off,on,only-on-failure



  },


};

module.exports = config;


/************************************************** */

//@ts-check
// const { devices} = require('@playwright/test');

// const config = {
//   testDir: './tests',
//   //Maximum time one test can run  for.
//   timeout: 10 * 1000,
//   expect: {
//     timeout: 5000
//   },
//   reporter: [
//     ['playwright-html', {
//       testFolder: 'tests',
//       title: 'Playwright HTML Report',
//       project: 'QA Tests',
//       release: '9.87.6',
//       testEnvironment: 'DEV',
//       embedAssets: true,
//       embedAttachments: true,
//       outputFolder: 'playwright-html-report',
//       minifyAssets: true,
//       startServer: true,
//     }]
//   ],
//   use: {
//     browserName: 'chromium',
//     headless: false,
//     screenshot: 'on',
//     trace: "on",
//     viewport: {
//       width: 1920,
//       height: 1080
//     },
//   }
// }