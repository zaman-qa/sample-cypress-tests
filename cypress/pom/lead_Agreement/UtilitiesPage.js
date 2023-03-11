export class utilities_page {
  utilitiesHeader() {
    return cy.contains('span', 'Utilities, Services, & Keys');
  }
  keysCopy() {
    return cy.get('[data-qa="lease-agreements-key-copies-0"]').type('1');
  }
  saveBtn() {
    return cy
      .get('[data-qa="lease-agreements-section-save-button"]')
      .should('be.visible')
      .click();
  }
}
export default utilities_page;
