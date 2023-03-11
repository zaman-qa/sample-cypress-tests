export class lease_specifics {
  leaseSpecificsHeader() {
    return cy.contains('span', 'Lease Specifics');
  }
  lease_end_action_continue() {
    return cy
      .get('[data-qa="radio-lease-end-action-input-option-continue-monthly"]')
      .click();
  }
  saveBtn() {
    return cy
      .get('[data-qa="lease-agreements-section-save-button"]')
      .should('be.visible')
      .click();
  }
}
export default lease_specifics;
