export class property_edit_page {
  editPropertyInformation() {
    return cy
      .get('#edit-property-info-form [data-qa="edit-btn"]')
      .should('be.visible')
      .click();
  }
  editLeaseInformation() {
    return cy
      .get('#edit-property-lease-form [data-qa="edit-btn"]')
      .should('be.visible')
      .click();
  }
  editAmenities() {
    return cy
      .get('#edit-property-amenties-form [data-qa="edit-btn"]')
      .should('be.visible')
      .click();
  }
  editTitle() {
    return cy.get('[name="title"]').should('be.visible').type(' Edited');
  }
  editAddress() {
    return cy.get('[name="address"]').should('be.visible').type(' Edited');
  }
  editCity() {
    return cy.get('[name="city"]').should('be.visible').type(' Edited');
  }
  selectPropertyType() {
    return cy
      .get('[name="details.property_details.property_type"]')
      .should('be.visible')
      .select(3);
  }
  inputBedrooms() {
    return cy
      .get('[name="details.property_details.bedrooms"]')
      .should('be.visible')
      .clear()
      .type('7');
  }
  inputBathroom() {
    return cy
      .get('[data-qa="details-property-details-bathrooms"]')
      .should('be.visible')
      .clear()
      .type('3');
  }
  inputDescription() {
    return cy
      .get('[name="description"]')
      .should('be.visible')
      .clear()
      .type(
        'You will always feel amazing at this property and will meet a soul mate here.',
      );
  }
  savePropertyInformation() {
    return cy
      .get('#edit-property-info-form button[type="submit"]')
      .should('be.visible')
      .click();
  }
  inputSecurityDeposit() {
    return cy
      .get('#security_deposit_amount')
      .should('be.visible')
      .clear()
      .type('67.00');
  }
  inputRent() {
    return cy
      .get('[data-qa="rent-amount-input"]')
      .should('be.visible')
      .clear()
      .type('123.00');
  }
  saveLeaseInformation() {
    return cy
      .get('#edit-property-lease-form button[type="submit"]')
      .should('be.visible')
      .click();
  }
  clickElements() {
    for (const elem of ['CABLE', 'SEWAGE', 'ELECTRICITY', 'GAS', 'SAT_TV']) {
      cy.get(
        `[name="details.lease_details.utilities_included"][value="${elem}"]`,
      ).click();
    }
  }
  saveAmenities() {
    return cy
      .get('#edit-property-amenties-form  button[type="submit"]')
      .should('be.visible')
      .click();
  }
}
export default property_edit_page;
