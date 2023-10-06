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
Cypress.Commands.add('shouldBeVisible', (selector: string) => {
  cy.get(selector).should('be.visible');
});

Cypress.Commands.add('shouldHaveText', (selector: string, text: string) => {
  cy.get(selector).should('have.text', text);
});

Cypress.Commands.add('shouldBeVisibleOpt', { prevSubject: 'optional' }, (subject, element) => {
  if (subject) {
    cy.wrap(subject).should('be.visible');
    return; // cy.get('selector').shouldBeVisible();
  }
  if (element) {
    cy.get(element).should('be.visible'); // cy.shouldBeVisible();
  }
});

Cypress.Commands.add('shouldBeVisible', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).should('be.visible'); // cy.get('selector').shouldBeVisible();
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  const updateOption = { delay: 0, ...options };
  return originalFn(element, text, updateOption);
});
