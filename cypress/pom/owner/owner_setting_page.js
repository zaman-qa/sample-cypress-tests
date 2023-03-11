///<reference types="cypress-iframe" />
export class settings_page {
  accountsNav() {
    return cy.get('span._3wSYlwjH1uyd2Jm-IQa7N-').should('be.visible');
  }
  settingsNav() {
    return cy.get('[data-qa="desktop-nav-item-settings"]').should('be.visible');
  }

  firstNameInput() {
    return cy.get('#first_name');
  }
  streetAddressInput() {
    return cy.get('#downshift-0-input');
  }
  phoneInput() {
    return cy.get('#telephone');
  }
  cityInput() {
    return cy.get('[name="mailing_address.city"]');
  }
  stateInput() {
    return cy.get('[name="mailing_address.state"]');
  }
  zipInput() {
    return cy.get('[name="mailing_address.zip"]');
  }
  emailInput() {
    return cy.get('#email');
  }
  passwordInput() {
    return cy.get('#password');
  }
  continueBtn() {
    return cy.get('#confirm-password');
  }
  changePasswordBtn() {
    return cy.get('#change_password');
  }
  currentPasswordInput() {
    return cy.get('#current_password');
  }
  newPasswordInput() {
    return cy.get('#password');
  }
  passwordConfirmInput() {
    return cy.get('#passwordConfirm');
  }
  confirmPasswordBtn() {
    return cy.get('#confirm_change_password');
  }
  continue2Btn() {
    return cy.get('#continue');
  }
  notificationBtn() {
    return cy.get('#notification-modal-ok-btn').should('be.visible');
  }
  saveBtn() {
    return cy.get('#my_info_save');
  }
  logoutBtn() {
    return cy.get("[data-qa='desktop-nav-item-logout']");
  }
  billingTab() {
    return cy.get('#billing_tab');
  }
  addCardBtn() {
    return cy.get('#settings-add-card-btn');
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
}
export default settings_page;
