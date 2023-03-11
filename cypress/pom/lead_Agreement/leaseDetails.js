export class lease_details {
  openLease() {
    return cy
      .get('[data-qa="manage-lease-item"]')
      .eq(0)
      .should('be.visible')
      .click();
  }
  createAgreement() {
    return cy
      .get('[data-qa="create-lease-agreement-button"]')
      .should('be.visible')
      .click();
  }
}
export default lease_details;
