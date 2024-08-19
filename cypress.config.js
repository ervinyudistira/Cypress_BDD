const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Tambahkan plugin Cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [preprocessor.default(config)],
        })
      );

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature', // Pola untuk mencari file feature
    baseUrl: 'http://zero.webappsecurity.com', // URL dasar aplikasi yang diuji
  },
});
