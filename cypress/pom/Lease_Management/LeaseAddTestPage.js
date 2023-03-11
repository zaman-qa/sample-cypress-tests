export class add_lease_page {
  nickInput() {
    return cy.get('#title').should('be.visible');
  }
  startDateInput() {
    return cy.get('#start_date').should('be.visible');
  }
  endDateInput() {
    return cy.get('#end_date').should('be.visible');
  }
  addLeaseBtn() {
    return cy.get('#add_lease').should('be.visible');
  }
  endActionBtn() {
    return cy.get('#end_action_terminate');
  }
  addLeaseTitle() {
    return cy.contains('Add Basic Lease Information').should('be.visible');
  }
  openLease() {
    return cy.get('[data-qa="manage-lease-item"]').eq(0).click();
  }
  deleteLease() {
    return cy.get('#delete-this-lease-btn').should('be.visible');
  }
  addDocument() {
    return cy.get('#upload-document-action').should('be.visible');
  }
  uploadFile() {
    return cy.get('#fileUploader');
  }
  shareFile() {
    return cy.get('#share_it');
  }
  saveDocument() {
    return cy.get('#upload_lease_document');
  }
  addTenantBtn() {
    return cy.get('#add-renters-btn').should('be.visible');
  }
  tenantFirstNameInput() {
    return cy.get('#first_name').should('be.visible');
  }
  tenantLastNameInput() {
    return cy.get('#last_name').should('be.visible');
  }
  tenantEmailInput() {
    return cy.get('#email').should('be.visible');
  }
  tenantTelephoneInput() {
    return cy.get('#telephone').should('be.visible');
  }
  saveTenantBtn() {
    return cy.get('#add_to_lease').should('be.visible');
  }
  verifyTenantName() {
    return cy.get('.nameWrap_yf68d').should('be.visible');
  }
  editTenant() {
    return cy
      .get('.actionButtonContainer_1t8xyw6')
      .eq(0)
      .next()
      .should('be.visible')
      .click();
  }
  convertApplicant() {
    return cy.get('#CONVERT_TO_APPLICANT').click();
  }
  saveBtn() {
    return cy.get('#remove_tenant').click();
  }
}
export default add_lease_page;
