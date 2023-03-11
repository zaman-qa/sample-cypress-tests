export class onboarding {
  landlord() {
    return cy.get("#landlord").click()
  }
  emailInput() {
    return cy.get("#email").should("be.visible")
  }
  firstNameInput() {
    return cy.get("#firstname").should("be.visible")
  }
  lastNameInput() {
    return cy.get("#lastname").should("be.visible")
  }
  password() {
    return cy.get("#password").should("be.visible")
  }
  propertiesCountInput() {
    return cy.get("#propertiesCount").should("be.visible")
  }
  radioBtn() {
    return cy
      .get(
        '[data-qa="radio-landlord-signup-description-input-option-my-rentals"]'
      )
      .click()
  }
  signUpBtn() {
    return cy.get("#signup_submit").click()
  }
  marketingOption() {
    return cy.get("#button-id-MARKETING").click()
  }
  applicationOption() {
    return cy.get("#button-id-RECEIVE_APPLICATION").click()
  }
  rentPaymentOption() {
    return cy.get("#button-id-RENT_PAYMENTS").click()
  }
  screeningOption() {
    return cy.get("#button-id-SCREEN_TENANT").click()
  }
  continueBtn() {
    return cy.get("#onboarding-continue-button").should("be.visible").click()
  }
  getStartedBtn() {
    return cy
      .get('[data-qa="button-setup-marketing-intro"]')
      .should("be.visible")
      .click()
  }
  letsGetStartedBtn() {
    return cy.get('[data-qa="lets-get-started"]').should("be.visible").click()
  }
}
export default onboarding
