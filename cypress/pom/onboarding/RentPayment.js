/* eslint-disable cypress/no-unnecessary-waiting */
export class rent_payment_page {
  continueBtn() {
    return cy
      .get('[data-qa="lease-details-basic-button-continue"]')
      .should("be.visible")
      .click()
  }
  addTenant() {
    return cy.get('[data-qa="radio-add-tenants-input-option-false"]').click()
  }
  addPayment() {
    return cy
      .get('[data-qa="radio-partial-payments-input-option-false"]')
      .click()
  }
  autoPayment() {
    return cy
      .get('[data-qa="radio-autopay-enabled-input-option-false"]')
      .click()
  }
  addMonthlyCharge() {
    cy.get('[data-qa="monthly-charge-category-input"]')
      .should("be.visible")
      .select(2)
    cy.get('[data-qa="monthly-charge-amount-input"]')
      .should("be.visible")
      .type("3.50")
    cy.get('[data-qa="monthly-charge-due-day-of-month-input"]')
      .should("be.visible")
      .click()
    cy.get('[type="radio"]').click()
    cy.get('[data-qa="day-month-picker-1"]').should("be.visible").click()
    cy.get('[data-qa="monthly-charge-save-button"]')
      .should("be.visible")
      .click()
  }
  addOneTimeCharge() {
    cy.get('[data-qa="one-time-charge-category-input"]')
      .should("be.visible")
      .select(4)
    cy.get('[data-qa="one-time-charge-amount-input"]')
      .should("be.visible")
      .type("999.88")
    cy.get('[data-qa="one-time-charge-due-date-input"]')
      .should("be.visible")
      .type("12/25/2022")
    cy.get('[data-qa="one-time-charge-description-input"]').should("be.visible")
    cy.get('[data-qa="one-time-charge-amount-input"]')
      .click()
      .type("Santa chimney entrance fee")
    cy.get('[data-qa="one-time-charge-save-button"]')
      .should("be.visible")
      .click()
  }
  nextBtn() {
    cy.get('[data-qa="add-charges-next-button"]').should("be.visible").click()
  }
  setupStripeIndividualAccount() {
    cy.get('[data-qa="stripe-individual-first-name-input"]')
      .should("be.visible")
      .type("Angenor")
    cy.get('[data-qa="stripe-individual-last-name-input"]')
      .should("be.visible")
      .type("De Oliviera")
    cy.get('[data-qa="stripe-individual-phone-input"]')
      .should("be.visible")
      .type("5005550005")
    cy.get('[data-qa="address"]').should("be.visible").type("23 Duh Dr")
    cy.get('[data-qa="city"]').should("be.visible").type("Windy City")
    cy.get('[data-qa="state"]').should("be.visible").select(22)
    cy.get('[data-qa="zip"]').should("be.visible").type("55555")
    cy.get('[data-qa="stripe-individual-ssn-input"]')
      .should("be.visible")
      .type("000000000")
    cy.get('[data-qa="stripe-individual-birthdate-input"]')
      .should("be.visible")
      .type("12301980")
    cy.get('[data-qa="stripe-account-setup-submit-button"]')
      .should("be.visible")
      .click()
  }
  bankMethod() {
    cy.get('[data-qa="add-bank-account-plaid-link-button"]')
      .should("be.visible")
      .click()
  }
  setupPlaidBankAccount() {
    cy.wait(1000)
    cy.getIframeBody("#plaid-link-iframe-1")
      .find("#aut-button")
      .should("be.visible")
      .click()
    cy.getIframeBody("#plaid-link-iframe-1")
      .contains("h2", "Citibank Online")
      .click()
    cy.getIframeBody("#plaid-link-iframe-1")
      .find("#aut-input-0")
      .should("be.visible")
      .type("user_good")
    cy.getIframeBody("#plaid-link-iframe-1")
      .find("#aut-input-1")
      .should("be.visible")
      .type("pass_good")
    cy.getIframeBody("#plaid-link-iframe-1")
      .find('button[type="submit"]')
      .should("be.visible")
      .click()
    cy.getIframeBody("#plaid-link-iframe-1")
      .find("input[type=radio]")
      .first()
      .should("exist")
      .check({ force: true })
    cy.getIframeBody("#plaid-link-iframe-1")
      .find("#aut-button")
      .should("be.visible")
      .click()
    cy.getIframeBody("#plaid-link-iframe-1")
      .find("#aut-button")
      .should("be.visible")
      .click()
    cy.get('[data-qa="next-button-bank-step"]').should("be.visible").click()
    cy.get('[data-qa="confirm-rent-payments-setup-button"]')
      .should("be.visible")
      .click()
    cy.get('[data-qa="payments-setup-finished-modal-button"]')
      .should("be.visible")
      .click()
  }
}
export default rent_payment_page
