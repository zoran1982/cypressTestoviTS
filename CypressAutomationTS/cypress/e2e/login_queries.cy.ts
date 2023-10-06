import login from '@support/pom/login_pageTellco';

describe('Login cypress queries check', () => {
  it.only('Using cypress queries', () => {
    login.openLoginPage();
    cy.wait(500);
    cy.get(login.loginBtn).prev().should('contain', 'Passwort vergessen');
    cy.get(login.forgotPasswordLink).next().should('have.attr', 'value', 'Login myTellco');
    cy.get(login.forgotPasswordLink).next().invoke('attr', 'value').should('eq', 'Login myTellco');

    cy.get(login.username).parent().parent().find('label').should('have.text', 'Benutzer (E-Mail-Adresse)');
    cy.get(login.username).parent().parent().contains('label', 'Benutzer (E-Mail-Adresse)');

    cy.get('pt-3').children().should('have.length', 2);
    cy.get('pt-3').children().first().should('contain', 'Passwort vergessen');
    cy.get('pt-3').children().contains('Passwort Vergessen');

    cy.get('pt-3').within(() => {
      cy.get('a').should('have.attr', 'href', '/forgotPassword');
      cy.get('input').should('have.attr', 'value', 'Login myTellco');

      cy.get('.pt-3').find('a').should('have.attr', 'href', '/forgotPassword');
      cy.get('.pt-3').find('input').should('have.attr', 'value', 'Login myTellco');
      cy.get('a').its('length').should('eq', 2);

      cy.get('.form-control').first().should('have.attr', 'placeholder', 'Benutzer (E-Mail-Adresse)');

      cy.get('.form-control').last().should('have.attr', 'placeholder', 'Passwort');

      cy.get('.form-control').find('label').first().should('have.text', 'Benutzer (E-Mail-Adresse)');
      cy.get('.form-control').find('label').last().should('have.attr', 'Passwort');
    });
  });
});
