export class rent_deposit_fee {
  rentHeader() {
    return cy.contains('span', 'Rent, Deposit, & Fees');
  }
  petFee() {
    return cy
      .get('[data-qa="radio-pet-rent-choice-input-option-false"]')
      .click();
  }
  proratedRentFee() {
    return cy
      .get('[data-qa="radio-prorated-rent-choice-input-option-false"]')
      .click();
  }
  petDepositFee() {
    return cy
      .get('[data-qa="radio-pet-deposit-choice-input-option-false"]')
      .click();
  }
  oneTimeFee() {
    return cy
      .get('[data-qa="radio-one-time-fee-choice-input-option-false"]')
      .click();
  }
  inputPayment() {
    return cy.get('[data-qa="input-accepted_payments-0"]').click();
  }
  saveBtn() {
    return cy
      .get('[data-qa="lease-agreements-section-save-button"]')
      .should('be.visible')
      .click();
  }
}
export default rent_deposit_fee;
