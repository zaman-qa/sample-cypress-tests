export class property_view_page {
  editProperty() {
    return cy
      .get('[data-qa="manage-property-button-edit"]')
      .should('be.visible')
      .click();
  }
  deleteProperty() {
    return cy
      .get('[data-qa="manage-property-button-delete"]')
      .should('be.visible')
      .click();
  }
  confirmDelete() {
    return cy
      .get('[data-qa="property-confirm-delete-modal-button-delete"]')
      .should('be.visible')
      .click();
  }
  moreBtn() {
    return cy
      .get('[data-qa="manage-property-button-actions"]')
      .should('be.visible')
      .click();
  }
  deleteDoneBtn() {
    return cy
      .get('[data-qa="property-deleted-success-card-button-done"]')
      .should('be.visible')
      .click();
  }
  emptyList() {
    return cy
      .get('[data-qa="property-list-empty-state-cta-add-property-container"]')
      .should('be.visible');
  }
  duplicateBtn() {
    return cy.get('#duplicate-property-btn').should('be.visible').click();
  }
  confirmDuplicated() {
    return cy.get('#confirm-property-duplicated').should('be.visible').click();
  }
  popupTitle() {
    return cy.get('#manage-property-title').should('be.visible');
  }
  applyNowBtn() {
    return cy.get('#apply_now_button').should('be.visible').click();
  }
  applyAsTenantBtn() {
    return cy.get('#applying_as_tenant_tenant').click();
  }
}
export default property_view_page;
