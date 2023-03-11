export class description_page {
  tittleInput() {
    return cy
      .get('[data-qa="property-setup-title-input"]')
      .should("be.visible")
      .type("test property")
  }
  descriptionInput() {
    return cy
      .get('[data-qa="property-setup-description-input"]')
      .should("be.visible")
      .type(
        "Beautiful property located steps from the beach. Recently remodeled with new carpet paint and bath fixtures."
      )
  }
  submitBtn() {
    return cy
      .get('[data-qa="property-setup-description-submit-button"]')
      .should("be.visible")
      .click()
  }
  imageUpload() {
    return cy.get('[data-qa="photos-input"]')
  }
  submitBtn1() {
    return cy
      .get('[data-qa="property-setup-photos-submit-button"]')
      .should("be.visible")
      .click()
  }
}
export default description_page
