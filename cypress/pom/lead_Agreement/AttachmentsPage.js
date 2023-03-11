export class attachments_page {
  attachmentsHeader() {
    return cy.contains('span', 'Provisions & Attachments');
  }
  disclosure() {
    return cy
      .get(
        '[data-qa="radio-lead-paint-disclosure-required-input-option-false"]',
      )
      .click();
  }
  saveBtn() {
    return cy
      .get('[data-qa="lease-agreements-section-save-button"]')
      .should('be.visible')
      .click();
  }
}
export default attachments_page;
