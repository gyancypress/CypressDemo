// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to log in a user
require('cypress-xpath');
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  // Custom command to select a product by SKU
  Cypress.Commands.add('selectProductBySKU', (skuId) => {
    cy.get(`[data-sku-id="${skuId}"]`).click();
  });
  
  // Custom command to check inventory
  Cypress.Commands.add('checkInventory', (storeId) => {
    cy.request(`/api/inventory/${storeId}`).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(`Inventory for store ${storeId}: ${response.body.inventory}`);
    });
  });
  
  // Overriding an existing Cypress command
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    // Add a custom header to all visit requests
    options = options || {};
    options.headers = {
      ...options.headers,
      'x-custom-header': 'my-custom-header',
    };
    return originalFn(url, options);
  });