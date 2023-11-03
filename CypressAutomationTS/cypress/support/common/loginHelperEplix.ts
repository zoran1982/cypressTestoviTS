import login from '@support/pom/login_pageEplix';

const password = Cypress.env('password');
const RightUsername = Cypress.env('RightUsername');
const sms_code = Cypress.env('sms_code');

const GermanyContryCode = Cypress.env('GermanyContryCode');

const loginWithUiUser = () => {
  login.loginWithUI(RightUsername, password, sms_code);
};

const selectCountryCode = () => {
  login.change_country_code();
};

const germany_flag = () => {
  login.germany_flag();
};

const iframe_body_help = () => {
  cy.get('#launcher').then(function ($iframe) {
    let iframebody = $iframe.contents().find('[data-testid="launcher-label"]');
    cy.wrap(iframebody).should('have.text', 'Help');
  });
};

export default {
  loginWithUiUser,
  selectCountryCode,
  germany_flag,
  iframe_body_help,
};
