// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
require('cypress-xpath');
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors or log them
    if (err.message.includes('specific error message')) {
      return false; // Prevent Cypress from failing the test
    }
    // Allow other errors to fail the test
    return true;
  });
  // Set a default timeout for all commands
Cypress.config('defaultCommandTimeout', 10000);

// Add a global before hook
before(() => {
  cy.log('Global setup before all tests');
});

// Add a global after hook
after(() => {
  cy.log('Global teardown after all tests');
});

// Add a global beforeEach hook
beforeEach(() => {
  cy.log('Setup before each test');
});

// Add a global afterEach hook
afterEach(() => {
  cy.log('Teardown after each test');
});
