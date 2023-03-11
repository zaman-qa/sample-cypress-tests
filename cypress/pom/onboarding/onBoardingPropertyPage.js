export class onboarding_property_page {
  addressInput() {
    return cy.get('[name="address"]').should("be.visible")
  }
  cityInput() {
    return cy.get('[data-qa="city"]').should("be.visible")
  }
  stateInput() {
    return cy.get('[data-qa="state"]').should("be.visible")
  }
  zipInput() {
    return cy.get('[data-qa="zip"]').should("be.visible")
  }
  bedroomInput() {
    return cy
      .get('[data-qa="onboarding-property-bedrooms"]')
      .should("be.visible")
  }
  bathroomInput() {
    return cy
      .get('[data-qa="details-property-details-bathrooms"]')
      .should("be.visible")
  }
  rentInput() {
    return cy.get('[data-qa="rent-amount-input"]').should("be.visible")
  }
  depositInput() {
    return cy
      .get('[data-qa="onboarding-property-security-deposit"]')
      .should("be.visible")
  }
  nextBtn() {
    return cy
      .get('[data-qa="onboarding-property-button-continue"]')
      .should("be.visible")
      .click()
  }
}
export default onboarding_property_page
