/* eslint-disable no-undef */

const { defineConfig } = require("cypress")

module.exports = defineConfig({
  // baseApiUrl: 'http://localhost:8080',
  viewportWidth: 1440,
  viewportHeight: 800,
  defaultCommandTimeout: 40000,
  chromeWebSecurity: false,
  env: {
    TEST_OWNER_URL:
      process.env.TEST_OWNER_URL || "https://stefan-owner.turbotenant.com",
    TEST_RENTER_URL:
      process.env.TEST_RENTER_URL || "https://stefan-renter.turbotenant.com",
    TEST_API_URL:
      process.env.TEST_API_URL || "https://stefan-api.turbotenant.com",
    TEST_TIMEOUT: 400000
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: true,
    json: true
  },
  projectId: "s5rbkq",
  // experimentalStudio: true,
  component: {
    // setupNodeEvents(on, config) {},
    specPattern: "src/**/*.{js,ts,jsx,tsx}",
    baseUrl: "https://stable-owner.turbotenant.com"
  }
})
