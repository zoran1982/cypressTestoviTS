import login from '@support/pom/login_pageEplix';

const password = Cypress.env('password');
const username1 = Cypress.env('username1');
const sms_code = Cypress.env('sms_code');
const GermanyContryCode = Cypress.env('GermanyContryCode');

const loginWithUiUser = () => {
  login.loginWithUI(username1, password, sms_code);
};

const selectCountryCode = () => {
  login.change_country_code();
};

const germany_flag = () => {
  login.germany_flag();
};

export default {
  loginWithUiUser,
  selectCountryCode,
  germany_flag,
};
