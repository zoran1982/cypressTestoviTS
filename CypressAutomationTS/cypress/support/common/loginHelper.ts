import login from '@support/pom/login_pageTellco';

const superadmin = Cypress.env('superadmin');
const backoffice = Cypress.env('backoffice');
const password = Cypress.env('password');

const loginAsSuperadmin = () => {
  login.loginWithUi(superadmin, password);
};

const loginAsBackoffice = () => {
  login.loginWithUi(backoffice, password);
};

const loginWithApiAsSuperadmin = () => {
  login.loginWithUi(superadmin, password);
};

const loginWithApiAsBackoffice = () => {
  login.loginWithUi(backoffice, password);
};

export default {
  loginAsBackoffice,
  loginAsSuperadmin,
  loginWithApiAsBackoffice,
  loginWithApiAsSuperadmin,
};
