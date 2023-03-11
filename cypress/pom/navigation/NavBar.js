export class nav_bar {
  applicants() {
    return cy
      .get('[data-qa="desktop-nav-item-applicants"]')
      .should('be.visible')
      .click();
  }
  messages() {
    return cy
      .get('[data-qa="desktop-nav-item-messages"]')
      .should('be.visible')
      .click();
  }
  leads() {
    return cy
      .get('[data-qa="desktop-nav-item-leads"]')
      .should('be.visible')
      .click();
  }
  tenants() {
    return cy
      .get('[data-qa="desktop-nav-item-tenants"]')
      .should('be.visible')
      .click();
  }
  leases() {
    return cy
      .get('[data-qa="desktop-nav-item-leases"]')
      .should('be.visible')
      .click();
  }
  property() {
    return cy
      .get(' [data-qa="desktop-nav-item-properties"]')
      .should('be.visible')
      .click();
  }
  forms() {
    return cy
      .get(' [data-qa="desktop-nav-item-forms"]')
      .should('be.visible')
      .click();
  }
}
export default nav_bar;
