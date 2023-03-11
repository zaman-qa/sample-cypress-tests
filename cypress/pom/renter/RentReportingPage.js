export class renter_reporting_page {
  ssnInput() {
    return cy.get('#ssn').should('be.visible');
  }
  dobInput() {
    return cy.get('[data-qa="birthdate"]').should('be.visible');
  }
  addressInput() {
    return cy.get('[data-qa="address"]').should('be.visible');
  }
  cityInput() {
    return cy.get('[data-qa="city"]').should('be.visible');
  }
  stateInput() {
    return cy.get('[data-qa="state"]').should('be.visible');
  }
  zipInput() {
    return cy.get('[data-qa="zip"]').should('be.visible');
  }
  boostMyCredit() {
    return cy
      .get('[data-qa="boost_my_credit_submit"]')
      .should('be.visible')
      .click();
  }
  soundsGoodBtn() {
    return cy
      .get('[data-qa="alert-modal-action"]')
      .should('be.visible')
      .click();
  }
}
export default renter_reporting_page;
