export class add_leads_page {
  leadsNavBar() {
    return cy.get('[data-qa="desktop-nav-item-leads"]').should('be.visible');
  }
  leadsHeader() {
    return cy.get('#tab-header-title').find('span').should('be.visible');
  }
  addNewBtn() {
    return cy.get('#add_new_lead').should('be.visible').click();
  }
  addNewLeadModal() {
    return cy.get('#add-lead-modal').should('be.visible');
  }
  propertyDropDown() {
    return cy.get('#listingId').should('be.visible').select(1);
  }
  firstNameInput() {
    return cy.get('#first_name').should('be.visible').type('TestTenant');
  }
  lastNameInput() {
    return cy.get('#last_name').should('be.visible').type('TestLast');
  }
  emailInput() {
    return cy
      .get('#email')
      .should('be.visible')
      .type(
        `test+${Date.now()}${Math.floor(Math.random() * 1000)}@turbotenant.com`,
      );
  }
  phoneInput() {
    return cy.get('#phone').should('be.visible').type('1234567890');
  }
  saveBtn() {
    return cy.get('#add-lead-button').click();
  }
  verifyLead() {
    return cy
      .get('.leadName_1r8sgor')
      .find('div')
      .should('have.text', 'TestTenant' + ' TestLast');
  }
  actionsBtn() {
    return cy.get('.fifthColumn_2jhfuw-o_O-fifthColumnRow_1fdkcan').click();
  }
  addToArchive() {
    return cy.get('[data-for="disabled-tip-ARCHIVE"]').click();
  }
  archiveBtn() {
    return cy
      .get('[data-qa="archived-leads-button"]')
      .should('have.attr', 'value', 'archived')
      .eq(0)
      .click({ force: true });
  }
  openLead() {
    return cy.get('[data-qa="leads-table-row-0"]').should('be.visible').click();
  }
  messageTab() {
    return cy
      .get('[data-qa="lead-property-tab_messages"]')
      .should('be.visible')
      .click();
  }
  inviteToApply() {
    cy.get('#invite_to_apply').should('be.visible').click();
  }
  showFilter() {
    cy.get('#show_filters_leads').should('be.visible').click();
  }
  searchBox() {
    return cy.get('#searchbox').should('be.visible');
  }
  searchResult() {
    return cy.get('[data-qa="leads-table-row-0"]').should('be.visible');
  }
}
export default add_leads_page;
