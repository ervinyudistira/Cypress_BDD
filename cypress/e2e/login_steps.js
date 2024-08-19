import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I open login page', () => {
  cy.visit('/login.html'); // Sesuaikan URL dengan halaman login yang benar
});