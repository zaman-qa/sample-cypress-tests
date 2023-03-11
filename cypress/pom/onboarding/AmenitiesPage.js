export class amenities_page {
  amenitiesInput() {
    cy.get(
      '[data-qa="input-details.lease_details.utilities_included-CABLE"]'
    ).click()
    cy.get(
      '[data-qa="input-details.lease_details.utilities_included-INTERNET"]'
    ).click()
    cy.get(
      '[data-qa="input-details.lease_details.utilities_included-SAT_TV"]'
    ).click()
  }
  submitBtn() {
    return cy
      .get('[data-qa="property-setup-utilities-submit-button"]')
      .should("be.visible")
      .click()
  }
  submitBtn1() {
    return cy
      .get('[data-qa="property-amenities-submit-button"]')
      .should("be.visible")
      .click()
  }
}
export default amenities_page
