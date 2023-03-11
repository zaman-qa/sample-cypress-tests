export class tenant_list {
  tenantHeader() {
    return cy.get('#tab-header-title').should('be.visible');
  }
  viewTenant() {
    return cy.get('[data-qa="view-tenant-0"]').click();
  }
}
export default tenant_list;
