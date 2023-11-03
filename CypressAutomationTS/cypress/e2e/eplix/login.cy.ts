import login from '@support/common/loginHelperEplix';
import login_1 from '@support/pom/login_pageEplix';

const RightUsername = Cypress.env('RightUsername');
const password = Cypress.env('password');
const sms_code_wrong = Cypress.env('sms_code_wrong');
const wrongUsername = Cypress.env('wrongUsername');
const wrongPassword = Cypress.env('wrongPassword');
const QA2_Eplix = Cypress.env('QA2_Eplix');

describe('login', () => {
  beforeEach(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
  });
  it('happy_case', () => {
    login.loginWithUiUser();
    cy.url().should('contain', '/dashboard');
    login_1.log_out();
    cy.url().should('contain', '/auth/login');
  });

  it('contry code', () => {
    login_1.openLoginPageEplix();
    login.selectCountryCode();
    login.germany_flag();
  });
  it('wrong_username', () => {
    // wrong credentials
    login_1.openLoginPageEplix();
    login_1.enter_username(wrongUsername);
    login_1.enter_password(wrongPassword);
    login_1.click_btn();
    login_1.phone_number_message();
  });
  it('wrong_password', () => {
    // wrong credentials

    login_1.openLoginPageEplix();
    login_1.enter_username(RightUsername);
    login_1.enter_password(wrongPassword);
    login_1.click_btn();
    cy.wait(1000);
    login_1.wrong_password_message();
  });

  it('empty_fields', () => {
    // empty credentials
    login_1.openLoginPageEplix();
    login_1.enter_empty_username();
    login_1.enter_empty_password();
    login_1.click_btn();
    login_1.required_field_message();
  });

  it('images', () => {
    login_1.openLoginPageEplix();
    login_1.image_on_login_page();
    login_1.logo_login_page_visible();
    login_1.logo_login_page_blue_visible();
    login_1.eye_on_password_field();
  });

  it('text_on_login_page', () => {
    login_1.openLoginPageEplix();
    login_1.text_on_login_page();
  });

  it('iframe', () => {
    login_1.openLoginPageEplix();
    cy.wait(1000);
    // handling with iframe
    login.iframe_body_help();
  });

  it('change_language', () => {
    login_1.openLoginPageEplix();
    login_1.language_login_page_btn();
    login_1.language_italian_select();
    login_1.checking_italian_language_login_page();
  });

  it('sms_validation_field', () => {
    //validation message in sms field
    login_1.openLoginPageEplix();
    cy.wait(3000);
    login_1.enter_username(RightUsername);
    login_1.enter_password(password);
    login_1.click_btn();

    // validation field
    login_1.enter_sms_wrong(sms_code_wrong);
    login_1.click_sms_btn();
    login_1.invalid_sms_message();

    //text below field
    login_1.invalid_sms_message_below_text();
    //back button and url's login page
    login_1.back_button_sms();
    cy.url().should('eq', QA2_Eplix);
  });
});
