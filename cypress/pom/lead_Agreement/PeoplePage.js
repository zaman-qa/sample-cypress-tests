export class people_page {
  peopleHeader() {
    return cy.contains('span', 'People on the Lease');
  }
  skipTenant() {
    return cy.get('[data-qa="input-skip_tenants-undefined"]').click();
  }
  searchName() {
    return cy.get('[data-qa="search-tenants"]').click();
  }
  selectTenant() {
    return cy.get('[data-qa="search-result"]').click();
  }
  additionalOccupants() {
    return cy
      .get('[data-qa="radio-additional-occupants-choice-input-option-false"]')
      .click();
  }
  streetAddressInput() {
    return cy.get('[name="landlord_mailing_address"]');
  }
  cityInput() {
    return cy.get('[name="landlord_mailing_city"]');
  }
  stateInput() {
    return cy.get('[name="landlord_mailing_state"]');
  }
  zipInput() {
    return cy.get('[name="landlord_mailing_zip"]');
  }
  saveBtn() {
    return cy
      .get('[data-qa="lease-agreements-section-save-button"]')
      .should('be.visible')
      .click();
  }
}
export default people_page;
