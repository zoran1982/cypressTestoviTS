import loginHelper from '@support/common/loginHelper'
import login from '@support/pom/login_pageTellco'
import data from '@fixtures/login.json'
//import { loginAsBackoffice, loginAsSuperadmin } from '../support/common/loginHelper';

/*describe('login functionality', () => {
    it('Login as superadmin', () => {
        cy.visit('/');
        cy.get('#username').type('admin.superadmin');
        cy.get('#password').type('Welcome1!');
        cy.get('[type="submit"]').click();
        
        cy.get('.sidebar-header').should('be.visible');
        cy.get('.sidebar-header h3').should('have.text','myTellco Administration');
        
    });

    it('Login as backoffice', () => {
        cy.visit('/');
        cy.get('#username').type('admin.backoffice');
        cy.get('#password').type('Welcome1!');
        cy.get('[type="submit"]').click();
        
        cy.get('.sidebar-header').should('be.visible');
        cy.get('.sidebar-header h3').should('have.text','myTellco Administration');
        
    });*/

/* describe('login functionality', () => {
        it('Login as superadmin', () => {
            login.openLoginPage();
            login.enterUsername('admin.superadmin');
            login.enterPassword('Welcome1!');
            login.clickLoginBtn();
         
           
            cy.get('.sidebar-header').should('be.visible');
            cy.get('.sidebar-header h3').should('have.text','myTellco Administration');
            
        });
    
        it('Login as backoffice', () => {
            login.openLoginPage();
            login.enterUsername('admin.backoffice');
            login.enterPassword('Welcome1!');
            login.clickLoginBtn();
            
            cy.get('.sidebar-header').should('be.visible');
            cy.get('.sidebar-header h3').should('have.text','myTellco Administration');
            
        });
    });
}); */ /*
const superadmin = Cypress.env('superadmin');
const backoffice = Cypress.env('backoffice');
const password = Cypress.env('password');

describe('login functionality', () => {
    it('Login as superadmin', () => {
        login.loginWithUi(superadmin,password);
        cy.shouldBeVisible(login.sidebarHeader);
        cy.shouldHaveText(login.sidebarHeader,'myTellco Administration');
       
    });

    it('Login as backoffice', () => {
        login.loginWithUi(backoffice,password);
        cy.shouldBeVisible(login.sidebarHeader);
        cy.shouldHaveText(login.sidebarHeader,'myTellco Administration');
       
    });
});*/

/*
describe('login functionality', () => {
    it('Login as superadmin', () => {
        loginHelper.loginAsSuperadmin();
        cy.shouldBeVisible(login.sidebarHeader);
        cy.shouldHaveText(login.sidebarHeader,data.sidebarHeader);
       
    });

    it('Login as backoffice', () => {
        loginHelper.loginAsBackoffice();
        cy.shouldBeVisible(login.sidebarHeader);
        cy.shouldHaveText(login.sidebarHeader,data.sidebarHeader);
       
    });
});*/
/*
describe('login functionality', () => {
    let testData:{
    sidebarHeader:string
    };

    before(() => {
        cy.fixture('login.json').then((data)=>{
            testData = data;
        });
    });
 
    it('Login as superadmin', () => {
        loginHelper.loginAsSuperadmin();
        cy.shouldBeVisible(login.sidebarHeader);
        cy.shouldHaveText(login.sidebarHeader,testData.sidebarHeader);
       
    });

    it('Login as backoffice', () => {
        loginHelper.loginAsBackoffice();
        cy.shouldBeVisible(login.sidebarHeader);
        cy.shouldHaveText(login.sidebarHeader,testData.sidebarHeader);
       
    });
});*/
/*describe('login functionality', () => {
    cy.fixture('login.json').then((data)=>{


        it('Login as superadmin', () => {
            loginHelper.loginAsSuperadmin();
            cy.shouldBeVisible(login.sidebarHeader);
            cy.shouldHaveText(login.sidebarHeader,data.sidebarHeader);
   
        });
    });
});*/

describe('login functionality', () => {
  it('Login as superadmin', () => {
    loginHelper.loginAsSuperadmin()
  })

  it('Login as backoffice', () => {
    loginHelper.loginAsSuperadmin()
  })

  it('Login as superadmin', () => {
    loginHelper.loginWithApiAsSuperadmin()
  })

  it('Login as backoffice', () => {
    loginHelper.loginWithApiAsBackoffice()
  })

  afterEach(() => {
    cy.shouldBeVisible(login.sidebarHeader)
    cy.shouldHaveText(login.sidebarHeader, data.sidebarHeader)
  })
})
