export class agreement_list {
  leaseSpecificsStartBtn() {
    return cy
      .get('[data-qa="lease-specifics-start-button"]')
      .should('be.visible')
      .click();
  }
  rentStartBtn() {
    return cy.get('[data-qa="rent-start-button"]').should('be.visible').click();
  }
  peopleStartsBtn() {
    return cy
      .get('[data-qa="people-start-button"]')
      .should('be.visible')
      .click();
  }
  petsStartBtn() {
    return cy.get('[data-qa="pets-start-button"]').should('be.visible').click();
  }
  utilitiesStartBtn() {
    return cy
      .get('[data-qa="utilities-start-button"]')
      .should('be.visible')
      .click();
  }
  provisionsStartBtn() {
    return cy
      .get('[data-qa="provisions-start-button"]')
      .should('be.visible')
      .click();
  }
  reviewAndPay() {
    return cy
      .get('[data-qa="lease-agreements-overview-button-review"]')
      .eq(0)
      .click();
  }
  finalize() {
    return cy
      .get('[data-qa="lease-agreements-review-button-finalize-pay"]')
      .click();
  }
  payment() {
    return cy.get('#one-time-payment').click();
  }
  pay() {
    return cy.get('#payment-action').click();
  }
  verifyPay() {
    return cy.get('[data-qa="done-card-title"]');
  }
}
export default agreement_list;
