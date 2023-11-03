import data from '@fixtures/login.json';
const QA2_Eplix = Cypress.env('QA2_Eplix');
const dev_Eplix = Cypress.env('dev_Eplix');
const QA_Eplix = Cypress.env('QA_Eplix');

class LoginPageEplix {
  username = '[data-cy="phone_number"]';
  password = '[data-cy="password"]';
  clickBtn = '.typo-regular-300';
  smsCode_field = '.bg-surface-1 > .relative';
  smsBtn = '[data-cy="loading_btn_resend_sms_login"]';

  changeCountryCode = '[role="presentation"]';
  selectGermanyCountryCode = '[data-cy="dd_option_GERMANY"]';
  selectedCountryCodeField = '.phone-number-field_phoneLabel__yy714';
  germanyFlag = '.country-flag_root__XFwCG';
  invalidMessageSelector = '.text-left > .typo_base__QxhEO';
  textFieldBelowInvalidSms = '.typo-regular-200.mt-4';
  backButtonSms = '[data-cy="btn_resend_sms_back"]';
  mobilePhoneNumerMessageSelector = '.form-field_formFieldHelperText__vdS68';
  wrongPasswordMessageSelector = ':nth-child(2) > .typo_base__QxhEO';
  requiredFieldSelector = '[name="username"] > .form-field_formFieldControl__x1pcF > .form-field_formFieldHelperText__vdS68';
  imageLoginPage = '.object-contain';
  logoLoginPage = '.block';
  logoLoginPageBlue = '.eplix-logo_eplixLogoBlue__P51Qx';
  eyeSelectorOnPasswordField = '[data-cy="btn_toggle_password_visibility"]';
  textOnLoginPage = '.typography-prop_regular300__Gu_T_';
  languageBtn = '[data-cy="dd_btn_language"]';
  languageSelectItalian = '[data-cy="dd_option_ITALIAN"]';
  italianLabel = '.typography-prop_regular600__0etNq';
  logOut = '[data-cy="loading_btn_dashboard_logout"]';

  openLoginPageEplix() {
    cy.visit(QA_Eplix);
  }

  enter_username(str_username: string) {
    cy.get(this.username).type(str_username);
  }

  enter_password(str_password: string) {
    cy.get(this.password).type(str_password);
  }

  click_btn() {
    cy.get(this.clickBtn).click();
  }

  enter_empty_username() {
    cy.get(this.username).clear();
  }
  enter_empty_password() {
    cy.get(this.password).clear();
  }
  enter_sms(sms_code: string) {
    cy.get(this.smsCode_field).type(sms_code);
  }
  enter_sms_wrong(sms_code_wrong: string) {
    cy.get(this.smsCode_field).type(sms_code_wrong);
  }

  click_sms_btn() {
    cy.get(this.smsBtn).click();
  }

  change_country_code() {
    cy.get(this.changeCountryCode)
      .click()
      .then(() => {
        cy.get(this.selectGermanyCountryCode).click();
      });
  }
  germany_flag() {
    cy.get(this.germanyFlag).should('be.visible');
  }

  invalid_sms_message() {
    cy.get(this.invalidMessageSelector).should('have.text', data.invalidSmsMessage);
  }

  invalid_sms_message_below_text() {
    cy.get(this.textFieldBelowInvalidSms).should('have.text', data.textBelowMessage);
  }

  back_button_sms() {
    cy.get(this.backButtonSms).click();
  }

  phone_number_message() {
    cy.get(this.mobilePhoneNumerMessageSelector).should('have.text', data.mobilePhoneNumberMessage);
  }

  wrong_password_message() {
    cy.get(this.wrongPasswordMessageSelector).should('have.text', data.wrongPasswordMessage);
  }

  required_field_message() {
    cy.get(this.requiredFieldSelector).should('have.text', data.requiredFieldMessage);
  }

  image_on_login_page() {
    cy.get(this.imageLoginPage).should('be.visible');
  }

  logo_login_page_visible() {
    cy.get(this.logoLoginPage).should('be.visible');
  }

  logo_login_page_blue_visible() {
    cy.get(this.logoLoginPageBlue).should('be.visible');
  }

  eye_on_password_field() {
    cy.get(this.eyeSelectorOnPasswordField).should('be.visible');
  }

  text_on_login_page() {
    cy.get(this.textOnLoginPage).should('have.text', data.textOnLoginPage);
  }
  language_login_page_btn() {
    cy.get(this.languageBtn).click();
  }
  language_italian_select() {
    cy.get(this.languageSelectItalian).click();
  }
  checking_italian_language_login_page() {
    cy.get(this.italianLabel).should('have.text', data.changeLanguageItalian);
  }

  log_out() {
    cy.get(this.logOut).click();
  }

  loginWithUI(str_username: string, str_password: string, sms_code: string) {
    cy.session(`[${str_username}]`, () => {
      this.openLoginPageEplix();
      this.enter_username(str_username);
      this.enter_password(str_password);
      this.click_btn();
      this.enter_sms(sms_code);
      this.click_sms_btn();
    });

    //this.openLoginPageEplix();
  }
}
export default new LoginPageEplix();
