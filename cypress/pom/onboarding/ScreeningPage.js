export class screening_page {
  getStarted() {
    return cy
      .get('[data-qa="onboarding-tenant-screening-button-continue"]')
      .should("be.visible")
      .click()
  }
  firstNameInput() {
    return cy
      .get('[data-qa="external-application-renter-info-first-name"]')
      .should("be.visible")
  }
  lastNameInput() {
    return cy
      .get('[data-qa="external-application-renter-info-last-name"]')
      .should("be.visible")
  }
  emailInput() {
    return cy
      .get('[data-qa="external-application-renter-info-email"]')
      .should("be.visible")
  }
  requestBtn() {
    return cy
      .get('[data-qa="external-application-functional-button-next"]')
      .should("be.visible")
      .click()
  }
}
export default screening_page
