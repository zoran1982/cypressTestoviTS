import login from '@support/pom/login_pageTellco';
import messages from '@fixtures/login.json';
//import login_pageTellco from '@support/pom/login_pageTellco';

describe('Login functionality', () => {
  it.only('Login as superadmin', () => {
    login.openLoginPage();
    login.clickLoginBtn();

    cy.get(login.loginAlert)
      .invoke('text')
      .then((text) => {
        cy.log(text);
      });
  });

  cy.get(login.loginAlert)
    .invoke('text')
    .then((text) => {
      const trimmedText = text.trim();
      expect(trimmedText).to.be.oneOf([messages.blockedLoginAlert, messages.InvalidLoginAlert]);
    });
});

//   cy.shouldHaveText(login.loginAlert, "");
// });
