const RightUsername = Cypress.env('RighUsernameForRegisUser');
const password = Cypress.env('password');
const smsCode = Cypress.env('sms_code');
const ssn = Cypress.env('ssn');
const email = Cypress.env('email');

class Register {
  registerNowBtn = '[data-cy="btn_signup"]';
  nextBtn = '[data-cy="loading_btn_wizard_navigation_next"]';
  backBtn = '[data-cy="loading_btn_wizard_navigation_back"]';
  usernameField = 'input[name="phone_number"]';
  passwordField = 'input[name="password"]';
  radioBtn1 = ':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp';
  radioBtn2 = ':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp';
  termsOfUse = '.typo_base__QxhEO ';
  privacyPolicy = '.typo_base__QxhEO .typography-prop_regular200__ceGXK';
  smsCodeField = 'input[name="sms_code"]';
  uploadDocumentFront = ':nth-child(4) > [data-cy="btn_registration_upload_document"]';
  ssnField = '[data-cy="social_security_number"]';
  emailField = '[data-cy="email"]';
  dateOfIssueField = '[data-cy="date_of_issue"]';
  dataPickerField = ':nth-child(2) > :nth-child(1) > .MuiButtonBase-root';
  confirmBtn = '[data-cy="loading_btn_document_info_overview_confirm"]';
  validationObject1 = '.w-[200px]';
  validationObject2 = '.object-contain';
  validationRegistrationMessage = '.typography-prop_regular600__0etNq';
  bulbRegistrationField = '.pt-1';
  bulbTextField = '.mt-2.5 > .flex > .typo_base__QxhEO';
  verifyAndLogin = '.button_buttonBase__ETbVA';
  chooseDocuments = '[data-cy="dd_btn_select_document"]';
  //document = 'cypress/fixtures/documents/belgija.png';

  registar_now() {
    cy.get(this.registerNowBtn).click();
  }

  next_btn() {
    cy.get(this.nextBtn).click({ force: true });
  }

  back_btn() {
    cy.get(this.backBtn).click();
  }

  enter_username_field() {
    cy.get(this.usernameField).type(RightUsername);
  }

  enter_password_field() {
    cy.get(this.passwordField).type(password);
  }

  radio_btn1() {
    cy.get(this.radioBtn1).click();
  }

  radio_btn2() {
    cy.get(this.radioBtn2).click();
  }

  enter_sms_code() {
    cy.get(this.smsCodeField).type(smsCode);
  }

  choose_documents() {
    cy.get(this.chooseDocuments).click();
  }

  upload_document_front(document: any) {
    cy.get(this.uploadDocumentFront).selectFile('cypress/fixtures/documents/belgija.png', { action: 'drag-drop' });
  }

  enter_ssn() {
    cy.get(this.ssnField).type(ssn);
  }

  enter_email() {
    cy.get(this.emailField).type(email);
  }

  enter_date_of_issue() {
    cy.get(this.dateOfIssueField)
      .click()
      .then(() => {
        cy.get(this.dataPickerField).click();
      });
  }

  confirm_btn() {
    cy.get(this.confirmBtn).click();
  }
}

export default new Register();
