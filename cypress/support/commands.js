// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => {
//   cy.visit("/");
//   cy.get("input[name=email]").type("business.dev@peppercontent.in");
//   cy.get("input[name=password]").type("Pepper@123");
//   cy.get("[type=submit]").click();
//   cy.url().should("include", "/");
// });
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// This will initialize local variable that will store session

let LOCAL_STORAGE_MEMORY = {};
import 'cypress-iframe';
import 'cypress-file-upload';
//Save local storage

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

//Restore local storage

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add('getIframeDocument', (id) => {
  return cy.get(id).its('0.contentDocument').should('exist');
});
Cypress.Commands.add('getIframeBody', (id) => {
  return cy
    .getIframeDocument(id)
    .its('body')
    .should('not.be.undefined')
    .then(cy.wrap);
});
Cypress.Commands.add('getIframeBody', (id) => {
  return cy
    .getIframeDocument(id)
    .its('body')
    .should('not.be.undefined')
    .then(cy.wrap);
});
Cypress.Commands.add('ownerLogout', () => {
  cy.url().then(($url) => {
    if ($url.includes('dashboard')) {
      cy.get('[data-qa="desktop-nav-item-account"]').click();
      cy.get('[data-qa="desktop-nav-item-logout"]').click();
    }
  });
});

Cypress.Commands.add('Logout', () => {
  cy.url().then(($url) => {
    if ($url.includes('dashboard')) {
      cy.get('[data-qa="desktop-nav-item-logout"]').click();
    }
  });
});
Cypress.Commands.add('iframeCustom', { prevSubject: 'element' }, ($iframe) => {
  return new Cypress.Promise((resolve) => {
    $iframe.ready(function () {
      resolve($iframe.contents().find('body'));
    });
  });
});
