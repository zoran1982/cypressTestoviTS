declare namespace Cypress {
  interface Chainable<> {
    shouldBeVisible(selector: string): Chainable<JQuery<HTMLElement>>;
    shouldHaveText(selector: string, text: string): Chainable<JQuery<HTMLElement>>;
    type(element: string, text: string, options: string): Chainable<JQuery<HTMLElement>>;
  }
}
