export class lease_basic_page {
  dateInput() {
    return cy
      .get('[data-qa="property-setup-leasing-basics-available-date"]')
      .should("be.visible")
  }
  monthlyBtn() {
    return cy
      .get(
        '[data-qa="radio-details-lease-details-lease-term-input-option-monthly"]'
      )
      .click()
  }
  rentInput() {
    return cy.get('[data-qa="rent-amount-input"]').should("be.visible")
  }
  depositInput() {
    return cy
      .get('[data-qa="property-setup-leasing-basics-security-deposit-amount"]')
      .should("be.visible")
  }
  submitBtn() {
    return cy
      .get('[data-qa="property-setup-leasing-basics-submit-button"]')
      .should("be.visible")
      .click()
  }
}
export default lease_basic_page
