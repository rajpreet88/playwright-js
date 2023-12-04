// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  retries: 1,
  workers: 3,
  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },

  reporter: [
    ['playwright-html', {
      testFolder: 'tests',
      title: 'Playwright HTML Report',
      project: 'QA Tests',
      release: '9.87.6',
      testEnvironment: 'DEV',
      embedAssets: true,
      embedAttachments: true,
      outputFolder: 'playwright-html-report',
      minifyAssets: true,
      startServer: false,
    }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects: [
    {
      name: 'safari',
      use: {

        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'off',//off,on,only-on-failure
        ...devices['iPhone 14 Pro Max']
      }
    },
    {
      name: 'chrome',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
        video: 'retain-on-failure',
        trace: 'only-on-failure',//off,on,only-on-failure
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 0.5,
        colorScheme: 'dark',
        // ...devices['Desktop Chrome'],
        // launchOptions: {
        //   args: ['--start-maximized']
        // }
      }
    },
  ]


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