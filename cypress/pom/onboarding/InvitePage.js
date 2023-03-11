export class invite_page {
  firstInput() {
    return cy
      .get('[data-qa="onboarding-renter-info-first-name"]')
      .should("be.visible")
  }
  secondsInput() {
    return cy
      .get('[data-qa="onboarding-renter-info-last-name"]')
      .should("be.visible")
  }
  emailInput() {
    return cy
      .get('[data-qa="onboarding-renter-info-email"]')
      .should("be.visible")
  }
  phoneInput() {
    return cy.get("#phone").should("be.visible")
  }
  sendInviteBtn() {
    return cy
      .get('[data-qa="onboarding-renter-info-button-next"]')
      .should("be.visible")
      .click()
  }
  finishBtn() {
    return cy
      .get('[data-qa="onboarding-mailing-address-button-save"]')
      .should("be.visible")
      .click()
  }
  doneBtn() {
    return cy
      .get('[data-qa="onboarding-invite-success-modal-button-done"]')
      .should("be.visible")
      .click()
  }
  nothingForNow() {
    return cy
      .get('[data-qa="onboarding-invite-success-nothing-for-now"]')
      .should("be.visible")
      .click()
  }
}
export default invite_page

