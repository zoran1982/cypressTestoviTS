import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', createBundler());
            return config;
        },
        watchForFileChanges: false,
        baseUrl: 'http://212.103.66.217:8081',
        viewportHeight: 900,
        viewportWidth: 1500,
        testIsolation: false,
        chromeWebSecurity: false
    },
});
