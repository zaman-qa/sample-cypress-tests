const moment = require('moment');
export class charge_page {
  paymentTab() {
    return cy
      .get('[data-qa="lease-tab_payments"]')
      .should('be.visible')
      .click();
  }
  createChargeBtn() {
    return cy.get('#create_charge').should('be.visible').click();
  }
  oneTimeCharge() {
    return cy.get('[data-qa="charge-type-one-time-select-option"]').click();
  }
  nextBtn() {
    return cy
      .get('[data-qa="charge-type-next-button"]')
      .should('be.visible')
      .click();
  }
  categoryDropDown() {
    return cy.get('#category').should('be.visible').select(2);
  }
  descriptionInput() {
    return cy
      .get('#description')
      .should('be.visible')
      .type('Lorem Ipsum is simply dummy text');
  }
  amountInput() {
    return cy.get('#amount').should('be.visible').type('100');
  }
  endDateInput() {
    return cy
      .get('#end_date')
      .should('be.visible')
      .type(moment().add(2, 'days').format('MM/DD/YYYY'));
  }
  reviewHeader() {
    return cy.get('[data-qa="review-charge-page"]').should('be.visible');
  }
  reviewChargeBtn() {
    return cy
      .get('[data-qa="review-charge-next-button"]')
      .should('be.visible')
      .click();
  }
  allowPartialPayments() {
    return cy.get('[data-qa="partial-payments-radio-yes"]').click();
  }
  allowAutoPay() {
    return cy.get('[data-qa="autopay-radio-yes"]').click();
  }
  saveSettingBtn() {
    return cy
      .get('[data-qa="allow-partial-payments-confirm-button"]')
      .should('be.visible')
      .click();
  }
  sendCharge() {
    return cy.get('[data-qa="sent-charges-list-item-0"]').should('be.visible');
  }
  createChargeNextBtn() {
    return cy.get('#next_create_charge').should('be.visible').click();
  }
}
export default charge_page;
