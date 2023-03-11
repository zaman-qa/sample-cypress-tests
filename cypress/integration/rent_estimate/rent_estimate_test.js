const utils = require('../../utils/cypress-utils');
const baths = Math.floor(Math.random() * 2) + 1;
const address = '123 Test Street, Wonderland, Colorado 80133';
const bedrooms = Math.floor(Math.random() * 5);
const buildingType = ['all', 'house', 'apartment'][
  Math.floor(Math.random() * 3)
];

const randomEmail = utils.generateTestEmail();
describe('Owner Forms Pack', () => {
  before(() => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/rent-estimate-report');
    cy.get('[data-qa="rentometer-form-title"]').should('be.visible');
  });
  it('Fill rent estimate form, submit rent estimate form and Check the results', () => {
    cy.get('[data-qa="rentometer-form-street-input"]')
      .should('be.visible')
      .type(address);
    cy.get('[data-qa="rentometer-form-bedrooms-input"]')
      .should('be.visible')
      .type(bedrooms.toString());
    cy.get('[data-qa="details-property-details-bathrooms"]')
      .should('be.visible')
      .type(baths.toString());
    cy.get('[data-qa="rentometer-form-email-input"]')
      .should('be.visible')
      .type(randomEmail);
    cy.get(`[data-qa="property-types-option-${buildingType}"]`).click();
    cy.get('[data-qa="rentometer-form-submit-button"]')
      .should('be.visible')
      .click();
    cy.get('[data-qa="rentometer-results-title"]')
      .should('be.visible')
      .and('contain', address);

    cy.get('[data-qa="min"]').should('be.visible').and('contain', '$2,400');

    cy.get('[data-qa="max"]').should('be.visible').and('contain', '$6,950');

    cy.get('[data-qa="mean"]').should('be.visible').and('contain', '$4,210');

    cy.get('[data-qa="percentile25"]')
      .should('be.visible')
      .and('contain', '$2,823');

    cy.get('[data-qa="percentile75"]')
      .should('be.visible')
      .and('contain', '$5,598');

    cy.get('[data-qa="result-description"]').should('be.visible');

    cy.get('[data-qa="email-note"]')
      .should('be.visible')
      .and('contain', 'We already emailed you a copy of the report.');
  });

  it('It should open and close share modal', () => {
    cy.get('[data-qa="rentometer-results-share-modal-button"]')
      .should('be.visible')
      .click();
    cy.get('[data-qa="rentometer-share-email-modal-title"]').should(
      'be.visible',
    );
    cy.get('[data-qa="rentometer-share-email-modal-close-button"]')
      .should('be.visible')
      .click();
  });
  it('It should copy to clipboard', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(win.prompt).as('copyToClipboardPrompt');
    });
    cy.get('[data-qa="rentometer-results-clipboard-copy-button"]')
      .should('be.visible')
      .click();
    cy.get('[data-qa="plain-toast"]')
      .should('be.visible')
      .and('contain', 'Link copied to clipboard!');
  });
  it('Want to check another property', () => {
    cy.get('[data-qa="rentometer-result-check-another-property-button"]')
      .should('be.visible')
      .click();
    cy.get('[data-qa="rentometer-form-title"]').should('be.visible');
  });
  it('Fill and submit rent estimate form without email', () => {
    cy.get('[data-qa="rentometer-form-title"]').should('be.visible');
    cy.get('[data-qa="rentometer-form-street-input"]')
      .should('be.visible')
      .type(address);
    cy.get('[data-qa="rentometer-form-bedrooms-input"]')
      .should('be.visible')
      .type(bedrooms.toString());
    cy.get('[data-qa="details-property-details-bathrooms"]')
      .should('be.visible')
      .type(baths.toString());
    cy.get('[data-qa="rentometer-form-email-input"]')
      .should('be.visible')
      .type(randomEmail);
    cy.get(`[data-qa="property-types-option-${buildingType}"]`).click();
    cy.get('[data-qa="rentometer-form-submit-button"]')
      .should('be.visible')
      .click();
  });
  it('Email note should not be present and ', () => {
    cy.get('[data-qa="email-note"]').should('not.exist');
    cy.get('[data-qa="rentometer-result-signup-button"]').should('be.visible');
  });
});
