export class dashboard {
  paymentTab() {
    return cy
      .get('[data-qa="renters-dashboard-payments"]')
      .should('be.visible')
      .click();
  }
  makePaymentBtn() {
    return cy.get('[data-qa="main-action"]').should('be.visible').click();
  }
  popOkBtn() {
    return cy.get('#stripe_id_bank_intro_action').should('be.visible').click();
  }
  getStartedBtn() {
    return cy
      .get('[data-qa="rent-reporting-get-started"]')
      .should('be.visible')
      .click();
  }
  documentTab() {
    return cy
      .get('[data-qa="renters-dashboard-documents"]')
      .should('be.visible')
      .click();
  }
  tenantCanSee() {
    return cy
      .get('[data-qa="file-name-document-1-tenant-can-see-this"]')
      .should('be.visible');
  }
  maintenanceTab() {
    return cy
      .get('[data-qa="renters-dashboard-maintenance"]')
      .should('be.visible')
      .click();
  }
}
export default dashboard;
