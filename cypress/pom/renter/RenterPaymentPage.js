/* eslint-disable cypress/no-unnecessary-waiting */
export class renter_payment_page {
  makePaymentBtn() {
    return cy.get('#makepayment').should('be.visible').click();
  }
  popOkBtn() {
    return cy.get('#stripe_id_bank_intro_action').should('be.visible').click();
  }
  addBankBtn() {
    return cy.get('#bank-account').should('be.visible').click();
  }
  continueBtn() {
    cy.wait(1000);
    return cy
      .getIframeBody('#plaid-link-iframe-1')
      .find('#aut-button')
      .should('be.visible')
      .click();
  }
  manualFlow() {
    return cy
      .getIframeBody('#plaid-link-iframe-1')
      .find('#flow-type-manual')
      .click({ force: true });
  }
  rountingNumber() {
    return cy
      .getIframeBody('#plaid-link-iframe-1')
      .find('#device-input')
      .should('be.visible')
      .type('110000000');
  }
  accountNumber() {
    return cy
      .getIframeBody('#plaid-link-iframe-1')
      .find('#account-number-input')
      .should('be.visible')
      .type('1111222233330000');
  }
  confirmAccountNumber() {
    return cy
      .getIframeBody('#plaid-link-iframe-1')
      .find('#account-number-confirmation')
      .should('be.visible')
      .type('1111222233330000');
  }
  personalInput() {
    return cy
      .getIframeBody('#plaid-link-iframe-1')
      .find('#class-type-personal')
      .click({ force: true });
  }
  NameInput() {
    return cy
      .getIframeBody('#plaid-link-iframe-1')
      .find('#name-input')
      .should('be.visible')
      .type('John Doe');
  }
  understandBtn() {
    return cy.get('#understandBtn').should('be.visible').click();
  }
  enterDepositsBtn() {
    return cy.get('#enterDeposits').should('be.visible').click();
  }
  amountInput() {
    cy.wait(1000);
    return cy
      .getIframeBody('#plaid-link-iframe-2')
      .find('#first-amount-input')
      .type('0.01');
  }
  amount2Input() {
    cy.wait(1000);
    return cy
      .getIframeBody('#plaid-link-iframe-2')
      .find('#second-amount-input')
      .type('0.02');
  }
  continue1Btn() {
    cy.wait(1000);
    return cy
      .getIframeBody('#plaid-link-iframe-2')
      .find('#aut-button')
      .should('be.visible')
      .click();
  }
  selectPayment() {
    return cy
      .get('[data-qa="sent-charges-list-item-0"]')
      .should('be.visible')
      .click();
  }
  failedPaymentText() {
    return cy
      .get('[data-qa="payment-failed-status"]')
      .should('be.visible')
      .and('contain', 'Payment Failed on');
  }
  transactionBtn() {
    return cy.get('[data-qa="transactions-0"]').click();
  }
  makePaymentBtn1() {
    return cy.get('#make_payment').should('be.visible').click();
  }
  creditCard() {
    return cy.get('#credit').should('be.visible').click();
  }
  cardNumberInput() {
    return cy
      .getIframeBody('[title="Secure card number input frame"]')
      .find('[name="cardnumber"]')
      .should('be.visible');
  }
  expDateInput() {
    return cy
      .getIframeBody('[title="Secure expiration date input frame"]')
      .find('[name="exp-date"]')
      .should('be.visible');
  }
  cvcInput() {
    return cy
      .getIframeBody('[title="Secure CVC input frame"]')
      .find('[name="cvc"]')
      .should('be.visible');
  }
  zipCodeInput() {
    return cy.get('#address_zip').should('be.visible');
  }
  fullNameInput() {
    return cy.get('#card_holder').should('be.visible');
  }
  saveCard() {
    return cy.get('#payment-action').should('be.visible').click();
  }
  introFlow() {
    return cy.get('#stripe_id_flow_verify_intro').should('be.visible');
  }
}
export default renter_payment_page;
