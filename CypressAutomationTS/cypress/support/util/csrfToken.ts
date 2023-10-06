export default function getCsrfToken() {
  return cy.document().then((doc) => {
    const csrfElement = doc.querySelector('meta[name="_csrf]') as HTMLMetaElement;

    if (!csrfElement) {
      throw new Error('CSRF token not found.');
    }

    const csrfToken = csrfElement.content;
    return csrfToken;
  });
}
