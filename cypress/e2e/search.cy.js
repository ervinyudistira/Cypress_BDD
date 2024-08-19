import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the Zero Bank homepage', () => {
  cy.visit('http://zero.webappsecurity.com/index.html');
});

When('I enter {string} in the search field', (keyword) => {
  cy.get('#searchTerm').type(keyword);
});

When('I click the search button', () => {
  cy.get('button[name="submit"]').click();
});

Then('I should see search results related to {string}', (keyword) => {
  cy.get('.results').should('contain', keyword);
});

Then('I should see no search results', () => {
  cy.get('.results').should('not.exist');
});