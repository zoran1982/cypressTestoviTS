describe('forgot_password',()=>{

 let userdata,userCookie;
    beforeEach('eplix_page',()=>{
      if (userCookie) {
        cy.setCookie('session-username', userCookie.value, userCookie);
        cy.visit('/dashboard');
      } else {
        cy.fixture('ePlixData').then(function(data){
          userdata = data;

          });
        cy.visit('https://app-qa.eplix.ch/en_GB/auth/login');
        
      }

       
    });
   it('happy_case',()=>{
       
    cy.get('[data-cy="btn_forgot_password"]').click();
   
    //page visibility
    cy.get('.justify-start').should('be.visible');

    cy.get('.object-contain').should('be.visible');
    cy.wait(3000)
    //reset field
    cy.get('[data-cy="phone_number"]').type(userdata[0].username);
    cy.get('[data-cy="loading_btn_forgot_password_reset"]').click();

    //enter Sms code
    cy.get('[data-cy="sms_code"]').type(userdata[0].SmsCode);
    cy.get('[data-cy="loading_btn_resend_sms_next"]').click();
    // entering new password
    cy.get('[data-cy="password"]').type(userdata[0].new_password);
    
    //confirm password
    cy.get('[data-cy="loading_btn_new_password_confirm"]').click();

    //validation 
    cy.url().should('eq','https://app-qa.eplix.ch/en_GB/auth/login');

    cy.get('[data-cy="phone_number"]').type(userdata[0].username);
    cy.get('[data-cy="password"]').type(userdata[0].new_password);
    cy.get('.typo-regular-300').click();

    // verification code
    cy.get('.bg-surface-1 > .relative').type(userdata[0].SmsCode);
    cy.get('.gap-x-4').click();

    cy.url().should('eq','https://app-qa.eplix.ch/en_GB/dashboard');
   
   });

   it('back_button',()=>{
       
    cy.get('[data-cy="btn_forgot_password"]').click();
   
    //page visibility
    cy.get('.justify-start').should('be.visible');

    cy.get('.object-contain').should('be.visible');
    cy.wait(3000)
    
    // back button in app, functionality
    cy.get('[data-cy="btn_forgot_password_back"]').click();
    cy.url().should('eq','https://app-qa.eplix.ch/en_GB/auth/login');

    //browser back button
    cy.get('[data-cy="btn_forgot_password"]').click()
    cy.wait(2000)
    cy.go('back');
    cy.url().should('eq','https://app-qa.eplix.ch/en_GB/auth/login');


   });


   it('wrong_password_check',()=>{
       
    cy.get('[data-cy="btn_forgot_password"]').click();
   
    //page visibility
    cy.get('.justify-start').should('be.visible');

    cy.get('.object-contain').should('be.visible');
    cy.wait(3000)
    //reset field
    cy.get('[data-cy="phone_number"]').type(userdata[0].username);
    cy.get('[data-cy="loading_btn_forgot_password_reset"]').click();

    //enter Sms code
    cy.get('[data-cy="sms_code"]').type(userdata[0].SmsCode);
    cy.get('[data-cy="loading_btn_resend_sms_next"]').click();
    // entering new password
    cy.get('[data-cy="password"]').type(userdata[1].password);

    //validation message 
    cy.get('[data-cy="loading_btn_new_password_confirm"]').click();
    cy.get('.form-field_formFieldBorderBox__dMfrd')
    
    //validation red border because of invalid password
    cy.get('.form-field_formFieldBorderBox__dMfrd').find('input[aria-invalid="true"]');
    
   
    //confirm button
    cy.get('[data-cy="loading_btn_new_password_confirm"]').should('have.text','Confirm new password.')

     //ePlix Logo existing classes
     cy.get('path[fill-rule="evenodd"]').should('have.class','eplix-logo_eplixLogoBlue__P51Qx');
     cy.get('path[fill-rule="evenodd"]').should('have.class','eplix-logo_eplixLogo__YRutY');
 
     //visibility of logo
     cy.get('.flex-col-reverse').scrollIntoView();
     cy.get('.eplix-logo_eplixLogoBlue__P51Qx').should('be.visible');
     cy.get('.eplix-logo_eplixLogo__YRutY').should('be.visible');
     
    

   
   });

   it('back_browser_button',()=>{
       
    cy.get('[data-cy="btn_forgot_password"]').click();
   
    //page visibility
    cy.get('.justify-start').should('be.visible');

    cy.get('.object-contain').should('be.visible');
    cy.wait(3000)
    //reset field
    cy.get('[data-cy="phone_number"]').type(userdata[0].username);
    cy.get('[data-cy="loading_btn_forgot_password_reset"]').click();

    //enter Sms code
    cy.get('[data-cy="sms_code"]').type(userdata[0].SmsCode);
    cy.get('[data-cy="loading_btn_resend_sms_next"]').click();
    // entering new password
    cy.get('[data-cy="password"]').type(userdata[1].password);

    //validation message 
    cy.get('[data-cy="loading_btn_new_password_confirm"]').click();
    cy.get('.form-field_formFieldBorderBox__dMfrd')
    
    cy.go('back');
    cy.get('.flex-col').should('be.visible');
  
   })

   it('validation_messages',()=>{
       
    cy.get('[data-cy="btn_forgot_password"]').click();
   
    //page visibility
    cy.get('.justify-start').should('be.visible');

    cy.get('.object-contain').should('be.visible');
    cy.wait(3000)
    //reset field
    cy.get('[data-cy="phone_number"]').type(userdata[0].username);
    cy.get('[data-cy="loading_btn_forgot_password_reset"]').click();

    //enter wrong Sms code
    cy.get('[data-cy="sms_code"]').type(userdata[1].SmsCode);
    cy.get('[data-cy="loading_btn_resend_sms_next"]').click();

    //validation message
    cy.get('.text-left > .typo_base__QxhEO').should('have.text','This field needs exactly 6 digits.');

    //send new sms code
    cy.get('[data-cy="btn_resend_sms_code"]').should('have.text','Send a new SMS code');
  
   })

   
   it('validation_messages',()=>{
       
    cy.get('[data-cy="btn_forgot_password"]').click();
   
    //page visibility
    cy.get('.justify-start').should('be.visible');

    cy.get('.object-contain').should('be.visible');
    cy.wait(3000)
    //reset field
    cy.get('[data-cy="phone_number"]').type(userdata[1].username);
   
    //validation message username 
    cy.get('[data-cy="loading_btn_forgot_password_reset"]').click();
    cy.get('.form-field_formFieldHelperText__vdS68')
    .should('have.text','Please enter a correct mobile phone number (more than 6 digits)');

    cy.go('back');
    cy.url().should('eq','https://app-qa.eplix.ch/en_GB/auth/login');

   })

});