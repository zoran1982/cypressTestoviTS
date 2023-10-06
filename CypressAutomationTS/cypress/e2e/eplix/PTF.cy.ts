/// <reference types='cypress' />

import Eplix from '../PageObjects/ePlixPage' 
describe('PTF',()=>{

let userdata;
before('homePage',()=>{
    cy.fixture('ePlixData').then(function(data){
      userdata = data;
    });
  
  })
 



   it('happy_case',()=>{
    cy.loginEplix(userdata[0].username,userdata[0].password,userdata[0].SmsCode)
    
    const ep = new Eplix();
    
     ep.getPensionBenefits();
     ep.getPension3a();
     cy.wait(3000);
     ep.getNew3aPortfolio();
     cy.wait(2000)
      
     //dropdown menu working status
    //cy.get('[data-cy="dd_value_null"]').click();
    //cy.contains('Employed').click();

    //next button on start
    cy.get('[data-cy="btn_portfolio_start_opening_next"]').click();
    cy.wait(2000)
    //next button after
    cy.contains('Next').click();
    cy.wait(2000)
    
    cy.contains('Next').click({force:true});
    cy.wait(2000)
    cy.get('.switch_slider__kQqNp').click();
    cy.contains('Next').click({force:true}); 
    
    //validation PTF
    cy.get('.items-center > img').should('be.visible');
    cy.get('.items-center > .items-start > :nth-child(2)')
    .contains('Your portfolio is opened and the strategy is set.');

    cy.get('[data-cy="btn_finish_portfolio_opening_close"]').click();
    cy.url().should('eq','https://app-qa.eplix.ch/en_GB/portfolio-3a');

    //marriage date when it is needed
    //cy.get('[data-cy="marriage_date"]').click();
    //cy.get(':nth-child(2) > :nth-child(2) > .MuiButtonBase-root').click()

    //radio buttons
    //ep.getNew3aPortfoliioRa_Btn_US();
    //ep.getNew3aPortfoliioRa_Btn_2nd();
    
 
    
     //next buttons
     //cy.get('[data-cy="btn_start_portfolio_edit_next"]').click();
     //cy.wait(1000)
     //cy.get('[data-cy="btn_portfolio_pending_orders_next"]').click();
    
     
  

   });

   it('PTF_limit',()=>{
    cy.loginEplix(userdata[3].username,userdata[3].password,userdata[3].SmsCode)
    
    const ep = new Eplix();
    
     ep.getPensionBenefits();
     ep.getPension3a();
     cy.wait(3000);
     cy.get('button[data-cy="chip_btn_plus_icon"]').click({force:true})
     cy.wait(2000)
     
     //validation message
     cy.get('.mr-8 > :nth-child(1) > .flex > p').should('have.text','You reached the maximum amount of portfolios for 3a solutions and cannot open any more portfolios. If you have any questions please contact the Hotline +41 58 442 65 00.')
     cy.get('.h-7').should('be.visible');
    
    
  

   });

   it('Checking_PTF_visibility_number_of_PTF',()=>{
    cy.loginEplix(userdata[3].username,userdata[3].password,userdata[3].SmsCode)
    
    const ep = new Eplix();
    
     ep.getPensionBenefits();
     ep.getPension3a();
     cy.wait(3000);
     cy.get('button[data-cy="chip_btn_plus_icon"]').click({force:true})
     cy.wait(2000)

     //scroll PTF
    cy.get('.portfolio-filter_filterContainer__cZ1Tk')
    .scrollTo('right')
    // validation 
    cy.get('.h-19 > :nth-child(5)').then((e)=>{
      
       let text = e.text();
      
       expect(text).to.contains('Portfolio 5')
       
    }).should('be.visible')

   });


   it('visibility_side_bar_3a',()=>{
    cy.loginEplix(userdata[3].username,userdata[3].password,userdata[3].SmsCode)
    
    const ep = new Eplix();
    
     ep.getPensionBenefits();
     ep.getPension3a();
     cy.wait(3000);
     cy.get('button[data-cy="chip_btn_plus_icon"]').click({force:true})
     cy.wait(2000)

     cy.get('.navigation-drawer_navigationDrawerBase__WC7Rd').should('be.visible');

   });

   it('visibility_side_bar_VB',()=>{
    cy.loginEplix(userdata[3].username,userdata[3].password,userdata[3].SmsCode)
    
    const ep = new Eplix();
    
     ep.getPensionBenefits();
     ep.getPensionVB();

     cy.get('.navigation-drawer_navigationDrawerBase__WC7Rd').should('be.visible');

   });

   it.only('opening_documents_PTF_3a_without_open_PTF',()=>{
    cy.loginEplix(userdata[0].username,userdata[0].password,userdata[0].SmsCode)
    
    const ep = new Eplix();
    
     ep.getPensionBenefits();
     ep.getPension3a();
     cy.wait(3000);
     ep.getNew3aPortfolio();
     cy.wait(2000)

    
     cy.get('[data-cy="btn_portfolio_start_opening_next"]').click();
     cy.wait(2000)
     // next button
     cy.contains('Next').click();
      cy.wait(2000)
     // next button
     cy.contains('Next').click({force:true});
     cy.wait(1000)
     cy.contains('Next').click({force:true});
     
    

     //documents
   /*cy.get('svg[fill="none"]').then((data)=>{

    data.forEach((element)=>{
    element.click()
    })
   })*/
  cy.get('.flex > .flex-row > svg').invoke('removeAttr','xmlns').first().click()

  
  })
   

});


