export class marketing_page {
  setUpMarketing() {
    return cy
      .get('[data-qa="button-setup-marketing"]')
      .should("be.visible")
      .click()
  }
  SMSOption() {
    return cy
      .get('[data-qa="radio-verification-type-input-option-sms"]')
      .click()
  }
  phoneInput() {
    return cy
      .get('[data-qa="phone-verification-form-telephone-input"]')
      .should("be.visible")
      .type("5005550005")
  }
  sendCodeBtn() {
    return cy
      .get('[data-qa="phone-verification-form-button-send"]')
      .should("be.visible")
      .click()
  }
  codeInput() {
    return cy
      .get('[data-qa="phone-verification-form-input-code"]')
      .should("be.visible")
      .type("999999")
  }
  verifyBtn() {
    return cy
      .get('[data-qa="phone-verification-form-button-verify"]')
      .should("be.visible")
      .click()
  }
  letsGoBtn() {
    return cy
      .get('[data-qa="marketing-turned-on-button"]')
      .should("be.visible")
      .click()
  }
  marketingIsOn() {
    cy.get('[data-qa="marketing-tab-container"]').should("be.visible")
    cy.get('[data-qa="marketing-button-stop"]').should("be.visible")
  }
}
export default marketing_page
