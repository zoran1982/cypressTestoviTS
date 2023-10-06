import loginWithApi from '@support/api/api_login';
import getCsrfToken from '@support/util/csrfToken';
class LoginPage {
  forgotPasswordLink() {
    throw new Error('Method not implemented.');
  }
  loginAlert() {
    throw new Error('Method not implemented.');
  }

  username = '#username';
  password = '#password';
  loginBtn = '[type="submit"]';
  sidebarHeader = '.sidebar-header h3';

  openLoginPage() {
    cy.visit('/' + 'advisor/login');
  }

  enterUsername(strUsername: string) {
    cy.get(this.username).type(strUsername);
  }

  enterPassword(strPassword: string) {
    cy.get(this.password).type(strPassword);
  }

  clickLoginBtn() {
    cy.get(this.loginBtn).click();
  }

  loginWithUi(strUsername: string, strPassword: string) {
    cy.session(`[${strUsername}]`, () => {
      this.openLoginPage();
      this.enterUsername(strUsername);
      this.enterPassword(strPassword);
      this.clickLoginBtn();
    });
    this.openLoginPage();
  }

  loginWithApi(strUsername: string, strPassword: string) {
    cy.session(`[${strUsername}]`, () => {
      this.openLoginPage();
      getCsrfToken().then((csrfToken) => {
        loginWithApi(strUsername, strPassword, csrfToken);
      });
    });
    this.openLoginPage();
  }
}

export default new LoginPage();
