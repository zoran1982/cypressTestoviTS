import 'cypress-file-upload'
describe('registration_suite',()=>{
let userdata;
    beforeEach('homePage',()=>{
        cy.fixture('ePlixDataRegistration').then((data)=>{
         userdata = data;
        });
        cy.visit("https://app-qa.eplix.ch/en_GB/auth/login");
      });

it.only('happy_case',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(5000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    cy.contains('Next').click();

    // attach file 1 approach
  
    const filePath = 'belgija.png';
    
   // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
   // .attachFile(filePath,{subjectType: 'drag-n-drop'});

    // select file 2 approach

    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
    .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'});

    // next button

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
    // insert SSN
    cy.get('[data-cy="social_security_number"]').type(userdata[0].SSN_1);
    

    // insert email
    cy.get('[data-cy="email"]').type(userdata[0].email);
    
    // date of issue
    cy.wait(2000)
    cy.get('[data-cy="date_of_issue"]').click()
    cy.get(':nth-child(2) > :nth-child(1) > .MuiButtonBase-root').click()
    
    cy.wait(2000)
   
    // Next button
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    // Confirm button
    cy.get('[data-cy="loading_btn_document_info_overview_confirm"]').click();

    //validation 
    cy.get('.w-\[200px\]').should('be.visible');
    cy.get('.object-contain').should('be.visible');
    cy.get('.typography-prop_regular600__0etNq').should('have.text','Welcome to ePlix!');

    //bulb text
    cy.get('.pt-1').click().scrollIntoView();
    cy.get('.mt-2\.5 > .flex > .typo_base__QxhEO').should('be.visible');

      
});

it('empty_SSN_validation_message',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(5000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    cy.contains('Next').click();

    // attach file 1 approach
  
    const filePath = 'belgija.png';
    
   // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
   // .attachFile(filePath,{subjectType: 'drag-n-drop'});

    // select file 2 approach

    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
    .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'});

    // next button

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
    // insert email
    cy.get('[data-cy="email"]').type(userdata[0].email);
   
     // Next button
     cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

     cy.get('[style="color: var(--ex-rgb-text-primary);"] > .form-field_formFieldControl__x1pcF > .form-field_formFieldHelperText__vdS68')
     .should('have.text','This field is required.') 

});

it('invalid_SSN_Format_validation_message',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(5000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    cy.contains('Next').click();

    // attach file 1 approach
  
    const filePath = 'belgija.png';
    
   // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
   // .attachFile(filePath,{subjectType: 'drag-n-drop'});

    // select file 2 approach

    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
    .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'});

    // next button

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
    // insert email
    cy.get('[data-cy="email"]').type(userdata[0].email);

    // insert SSN
    cy.get('[data-cy="social_security_number"]').type(userdata[0].SSN_Invalid_Format);
    
   
     // Next button
     cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

     cy.get('[style="color: var(--ex-rgb-text-primary);"] > .form-field_formFieldControl__x1pcF > .form-field_formFieldHelperText__vdS68')
     .should('have.text','Social security number must contain 13 digits') 

});

it('empty_email_validation_message',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(5000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    cy.contains('Next').click();

    // attach file 1 approach
  
    const filePath = 'belgija.png';
    
   // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
   // .attachFile(filePath,{subjectType: 'drag-n-drop'});

    // select file 2 approach

    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
    .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'});

    // next button

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
    // insert email
   // cy.get('[data-cy="email"]').type(userdata[0].email);

    // insert SSN
    cy.get('[data-cy="social_security_number"]').type(userdata[0].SSN_1);
    
   
     // Next button
     cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
     //email validation message
     cy.get('.form-field_error__LPfup > .form-field_formFieldHelperText__vdS68')
     .should('have.text','This field is required.') 

});

it('wrong_email_format_validation_message',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(5000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    cy.contains('Next').click();

    // attach file 1 approach
  
    const filePath = 'belgija.png';
    
   // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
   // .attachFile(filePath,{subjectType: 'drag-n-drop'});

    // select file 2 approach

    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
    .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'});

    // next button

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
    // insert email
     cy.get('[data-cy="email"]').type(userdata[0].invalid_email_format);

    // insert SSN
    cy.get('[data-cy="social_security_number"]').type(userdata[0].SSN_1);
    
   
     // Next button
     cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
     //email validation message
     cy.get('.form-field_error__LPfup > .form-field_formFieldHelperText__vdS68')
     .should('have.text','Invalid email') 

});

it('validation_progress_bar_and_logo_visibility',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(5000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    cy.contains('Next').click();

    // attach file 1 approach
  
    const filePath = 'belgija.png';
    
   // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
   // .attachFile(filePath,{subjectType: 'drag-n-drop'});

    // select file 2 approach

    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
    .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'});

    // next button

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
    //visibility of the progress bar
    cy.get('.h-1 > :nth-child(4)').should('have.class','bg-blue');

    //ePlix Logo existing classes
    cy.get('path[fill-rule="evenodd"]').should('have.class','eplix-logo_eplixLogoBlue__P51Qx');
    cy.get('path[fill-rule="evenodd"]').should('have.class','eplix-logo_eplixLogo__YRutY');

    //visibility of logo
    cy.get('.flex-col-reverse').scrollIntoView();
    cy.get('.eplix-logo_eplixLogoBlue__P51Qx').should('be.visible');
    cy.get('.eplix-logo_eplixLogo__YRutY').should('be.visible');
    
});


it('visibility_chatbot',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(4000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    cy.contains('Next').click();

    // attach file 1 approach
  
    const filePath = 'belgija.png';
    
   // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
   // .attachFile(filePath,{subjectType: 'drag-n-drop'});

    // select file 2 approach

    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
    .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'})
    
    
    cy.get('.break-all').should('have.text',filePath);
     
    //remove document button
    cy.get('.icon-button_iconButton__baRfw').click();
    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]').then(($e)=>{
        let text = $e.text();
        expect(text).to.be.equal('Upload file'); 

     // visibility images on the page  handling with iframe
     cy.get('.object-contain').should('be.visible');
      
     // chatbot visibility and functionality
     cy.wait(2000);
      cy.get('#launcher').then(function($iframe){
 
         let iframebody = $iframe.contents().find('[data-testid="launcher-label"]');
         cy.wrap(iframebody)
         .should('have.text','Help');
        
   })
      //validation chatbot popup    
    });
      
});


it('identification_documents_validation_buttons',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(4000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    cy.contains('Next').click();

    // attach file 1 approach
  
    const filePath = 'belgija.png';
    
   // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
   // .attachFile(filePath,{subjectType: 'drag-n-drop'});

    // select file 2 approach

    cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
    .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'})
    
    
    cy.get('.break-all').should('have.text',filePath);

    //change and validation documents
    cy.get('[data-cy="dd_value_Identity card"]').click();
    cy.contains('Passport').click()

    cy.get('[data-cy="dd_value_RegistrationDocumentsEnum.PASSPORT"]').should('have.text','Passport');


    //bulb text validation 
    cy.get('.pt-1').click()
    .should('have.text','Less Information');

    cy.get('.typography-prop_medium300__RHtQA')
    .should('have.text','Keep the following in mind when photographing your passport: ');
   
    cy.get('.pt-1').click()
    .should('have.text','More Information');

    //validation buttons
    cy.get('[data-cy="btn_wizard_navigation_back"]').should('have.text','Back');
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').should('have.text','Next');
    
}) 

it('identification_documents_validation_bulb',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    //enter credentials
    cy.wait(4000);
    cy.get('input[name="phone_number"]').type(userdata[0].username);
    cy.get('input[name="password"]').type(userdata[0].password);

     
    //radion buttons
    cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
    cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
     
    //sms field
    cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
    
    //text above field
    cy.get('.typography-prop_regular300__Gu_T_').contains('Enter the SMS code sent to number');

    //text above
    cy.get('.form-field_formFieldLabel__IB13_').should('have.text','Verification code');

    //text below field
    cy.get('[data-cy="btn_resend_sms_code"]').should('have.text','Send a new SMS code');

    //text below field
    cy.get('p.typography-prop_regular200__ceGXK')
    .should('have.text','You did not receive an SMS code? Please check the mobile phone number you entered.')
   
    //buttons
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').should('have.text','Next');
    cy.get('[data-cy="btn_wizard_navigation_back"]').should('have.text','Back');
    
    //progress bar
    cy.get('.h-1 > :nth-child(2)').should('have.class','bg-blue');
    cy.get('.h-1 > :nth-child(3)').should('not.have.class','bg-blue');
}) 
     
it('Registration_page_password_requirementsField',()=>{
 
    cy.get('[data-cy="btn_signup"]').click();
    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

    // next button should be disabled

    cy.get('[data-cy="loading_btn_wizard_navigation_next"]').should('be.disabled');
    
    //visibility of the progress bar
    cy.get('.h-1 > :nth-child(1)').should('have.class','bg-blue');
    cy.get('.h-1 > :nth-child(2)').should('not.have.class','bg-blue');

    //ePlix Logo existing classes
    cy.get('path[fill-rule="evenodd"]').should('have.class','eplix-logo_eplixLogoBlue__P51Qx');
    cy.get('path[fill-rule="evenodd"]').should('have.class','eplix-logo_eplixLogo__YRutY');

    //visibility of logo
    cy.get('.flex-col-reverse').scrollIntoView();
    cy.get('.eplix-logo_eplixLogoBlue__P51Qx').should('be.visible');
    cy.get('.eplix-logo_eplixLogo__YRutY').should('be.visible');

    //password requirements
    cy.get('.password-policy-checklist_checkList__p04HK').contains('Password requirements:');


    })

    it('Registration_page_visibility_password',()=>{
 
        cy.get('[data-cy="btn_signup"]').click();
        cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();

        cy.wait(2000);
    
        cy.get('[data-cy="password"]').type(userdata[0].password)

        //visibility password
        cy.get('input[type="password"]')
   
    
        })

        it('Registration_page_visibility_termsOfUse',()=>{
 
            cy.get('[data-cy="btn_signup"]').click();
            cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
    
            cy.wait(2000);
     
           // terms of use
           cy.get('p.typo_base__QxhEO > .cursor-pointer > .typo_base__QxhEO').click()
           cy.get('.documents_wrapper__7OGMp')
           .should('be.visible')
            
        

           //privacy policy
           cy.get('div.typo_base__QxhEO > .cursor-pointer > .typo_base__QxhEO').click()
           cy.get('.documents_orderedList__n3_yU > :nth-child(1)')
            .should('be.visible')
        
       
        
            })

            it('back_button_functionality',()=>{
 
                cy.get('[data-cy="btn_signup"]').click();
                cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
            
                //enter credentials
                cy.wait(5000);
                cy.get('input[name="phone_number"]').type(userdata[0].username);
                cy.get('input[name="password"]').type(userdata[0].password);
            
                 
                //radion buttons
                cy.get(':nth-child(4) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
                cy.get(':nth-child(5) > .switch_inputWrapper__uOceJ > .switch_slider__kQqNp').click();
            
                cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
                 
                //sms field
                cy.get('input[name="sms_code"]').type(userdata[0].SmsCode);
                cy.contains('Next').click();
            
                // attach file 1 approach
              
                const filePath = 'belgija.png';
                
               // cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
               // .attachFile(filePath,{subjectType: 'drag-n-drop'});
            
                // select file 2 approach
            
                cy.get(':nth-child(5) > [data-cy="btn_registration_upload_document"]')
                .selectFile(('cypress/fixtures/belgija.png'), {action: 'drag-drop'});
            
                // next button
            
                cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();
            
               
                // Next button
                cy.get('[data-cy="loading_btn_wizard_navigation_next"]').click();


                // application "Back " buttons functionality
                cy.get('[data-cy="btn_wizard_navigation_back"]').click();
                cy.get('.h-1 > :nth-child(4)').should('not.have.class','bg-blue');
                cy.wait(2000)
                
                cy.get('[data-cy="btn_wizard_navigation_back"]').click();
                cy.get('.h-1 > :nth-child(3)').should('not.have.class','bg-blue');

                // Register page
                cy.get('[data-cy="btn_wizard_navigation_back"]').click();
                cy.get('.relative.flex-col > :nth-child(1) > .flex-col').should('be.visible');
                
                // info page after clicking on "Register now"
                cy.get('[data-cy="btn_start_registration"]').click();
                cy.url().should('eq','https://app-qa.eplix.ch/en_GB/auth/login');
                   
                //visibility login page
                cy.get('.justify-start').should('be.visible');
                  
            });

});