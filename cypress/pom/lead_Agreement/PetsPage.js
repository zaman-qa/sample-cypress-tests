export class pets_page {
  petsHeader() {
    return cy.contains('span', 'Pets, Smoking, & Insurance');
  }
  petsChoice() {
    return cy.get('[data-qa="radio-pets-choice-input-option-false"]').click();
  }
  saveBtn() {
    return cy
      .get('[data-qa="lease-agreements-section-save-button"]')
      .should('be.visible')
      .click();
  }
}
export default pets_page;
