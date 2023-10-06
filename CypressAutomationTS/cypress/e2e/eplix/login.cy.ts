/* /* /// <reference types='cypress' />

describe('login', () => {
  let userdata: any;
  beforeEach('homePage', () => {
    cy.fixture('ePlixData').then(function (data) {
      userdata = data;
    });
    cy.visit('https://app-qa.eplix.ch/en_GB/auth/login');
  });

  it('wrong_username', () => {
    // wrong credentials
    cy.get('[data-cy="phone_number"]').type('yut1211');
    cy.get('[data-cy="password"]').type(userdata[0].password);
    cy.get('.typo-regular-300').click();

    cy.get('.form-field_formFieldHelperText__vdS68').should('have.text', 'Mobile phone number must contain at least 6 digits.');
  });
  it('wrong_password', () => {
    // wrong credentials
    cy.get('[data-cy="phone_number"]').type(userdata[1].username);
    cy.get('[data-cy="password"]').type(userdata[1].password);
    cy.get('.typo-regular-300').click();

    cy.get(':nth-child(2) > .typo_base__QxhEO').should(
      'have.text',
      "Your user data is not correct. If you don't have a user account yet, register here.",
    );
  });
 */
/* it('empty_fields', () => {
  // empty credentials
  cy.get('[data-cy="phone_number"]').clear();
  cy.get('[data-cy="password"]').clear();
  cy.get('.typo-regular-300').click();

  cy.get('[name="username"] > .form-field_formFieldControl__x1pcF > .form-field_formFieldHelperText__vdS68').should(
    'have.text',
    'This field is required.',
  );

  cy.get(':nth-child(2) > .form-field_formFieldControl__x1pcF > .form-field_formFieldHelperText__vdS68').should(
    'have.text',
    'This field is required.',
  );
});

it('images', () => {
  cy.get('.object-contain').should('be.visible');
  cy.get('.block').should('be.visible');
  cy.get('.eplix-logo_eplixLogoBlue__P51Qx').should('be.visible');
  // eye on password field
  cy.get('[data-cy="btn_toggle_password_visibility"]').should('be.visible');
});

it('text_on_login_page', () => {
  cy.get('.typography-prop_regular300__Gu_T_').should('have.text', 'Please log in with your mobile phone number and password. ');
});

it('iframe', () => {
  cy.wait(5000);
  // handling with iframe
  cy.get('#launcher').then(function ($iframe) {
    let iframebody = $iframe.contents().find('[data-testid="launcher-label"]');
    cy.wrap(iframebody).should('have.text', 'Help');
  });
});

it('change_language', () => {
  cy.get('[data-cy="dd_btn_language"]').click();
  cy.get('[data-cy="dd_option_ITALIAN"]').click();

  cy.get('.typography-prop_regular600__0etNq').should('have.text', 'Sei già registrato? ');
}); */

/*
  it.only('support approach_1',()=>{
    
 
    cy.visit('https://helpdesk.eplix.ch/hc/en-us')
   
});*/
/*
it('support approach_2',()=>{
    
    cy.get('[data-cy="btn_support_link"]').then((e)=>{
      
        let url = e.prop('href');
        cy.visit(url);
        cy.go('back');
    
    });
    
});
*/

/* it('sms_validation_field', () => {
  //validation message in sms field
  cy.get('[data-cy="phone_number"]').type(userdata[0].username);
  cy.get('[data-cy="password"]').type(userdata[0].password);
  cy.get('[data-cy="loading_btn_login_submit"]').click();
  // validation field
  cy.get('.bg-surface-1 > .relative').type('gfgdfg');
  cy.get('[data-cy="loading_btn_resend_sms_login"]').click();
  cy.get('.text-left > .typo_base__QxhEO').should('have.text', 'This field needs exactly 6 digits.');

  //text below field
  cy.get('.typo-regular-200.mt-4').should('have.text', 'You have not received an SMS code? Presumably you have a new mobile phone number? ');

  //back button and url's login page
  cy.get('[data-cy="btn_resend_sms_back"]').click();
  cy.url().should('eq', 'https://app-qa.eplix.ch/en_GB/auth/login');
});

 */
import login from '@support/common/loginHelperEplix';
//import login_pageEplix from '@support/pom/login_pageEplix';

describe('login', () => {
  it('happy_case', () => {
    login.loginWithUiUser();
    cy.url().should('contain', '/dashboard');
  });

  it.only('contry code', () => {
    login.selectCountryCode();
    login.germany_flag();
  });
});
