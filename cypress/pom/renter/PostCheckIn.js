export class post_checkin {
  DoneBtn() {
    return cy
      .get('[data-qa="success-payment-done"]')
      .should('be.visible')
      .click();
  }
  GoodBtn() {
    return cy.get('[data-qa="check-in-form-radio-good"]').click();
  }
  detailsInput() {
    return cy.get('#note').should('be.visible').type('test');
  }
  maintenanceRequest() {
    return cy.get('[data-qa="check-in-maintenance-radio-no"]').click();
  }
  sendBtn() {
    return cy.get('[data-qa="check-in-form-button-submit"]').click();
  }
}
export default post_checkin;
