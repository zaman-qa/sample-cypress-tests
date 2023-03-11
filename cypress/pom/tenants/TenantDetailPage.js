export class tenant_detail {
  messageTab() {
    return cy
      .get('[data-qa="renter-profile-tab-messages"]')
      .should('be.visible')
      .click();
  }
}
export default tenant_detail;
