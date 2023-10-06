export default function loginWithApi(strUsername: string, strPassword: string, csrfToken: string) {
    const loginUrl = Cypress.env('dev')+ 'authenticate?/advisor=true';

    const loginBody = {
        username: strUsername,
        password: strPassword,
        _csrf: csrfToken,
    };

    cy.request({method: 'POST', url: loginUrl, body: loginBody, form: true}).then((response) => {
        expect(response.status).to.equal(200);
    });
}