class LoginPageEplix {
  username = '[data-cy="phone_number"]';
  password = '[data-cy="password"]';
  clickBtn = '.typo-regular-300';
  smsCode = '.bg-surface-1 > .relative';
  smsBtn = '[data-cy="loading_btn_resend_sms_login"]';

  changeCountryCode = '[role="presentation"]';
  selectGermanyCountryCode = '[data-cy="dd_option_GERMANY"]';
  selectedCountryCodeField = '.phone-number-field_phoneLabel__yy714';
  germanyFlag = '.country-flag_root__XFwCG';

  openLoginPageEplix() {
    cy.visit('https://app-dev.eplix.ch/en_GB/auth/login');
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

  enter_sms(sms_code: string) {
    cy.get(this.smsCode).type(sms_code);
  }

  click_sms_btn() {
    cy.get(this.smsBtn).click();
  }

  change_country_code() {
    this.openLoginPageEplix();
    cy.get(this.changeCountryCode).click();
    cy.get(this.selectGermanyCountryCode).click();
  }
  germany_flag() {
    cy.get(this.germanyFlag).should('be.visible');
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
