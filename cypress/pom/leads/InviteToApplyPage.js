export class invite_to_apply_page {
  inviteHeader() {
    return cy.get('#invite-to-apply').should('be.visible');
  }
  firstName() {
    return cy.get('#first_name').should('be.visible');
  }
  lastName() {
    return cy.get('#last_name').should('be.visible');
  }
  onlyEmail() {
    return cy.get('#rb_email').click();
  }
  email() {
    return cy.get('#email').should('be.visible');
  }
  rentalProperty() {
    return cy.get('#listingId').should('be.visible').select(1);
  }
  inviteBtn() {
    return cy.get('#invite').should('be.visible').click();
  }
  streetAddressInput() {
    return cy.get('[name="address"]');
  }
  phoneInput() {
    return cy.get('#phone');
  }
  cityInput() {
    return cy.get('#city');
  }
  stateInput() {
    return cy.get('#state');
  }
  zipInput() {
    return cy.get('#zip');
  }
  finishBtn() {
    return cy.get('#save').should('be.visible').click();
  }
  doneBtn() {
    return cy.get('#done').should('be.visible').click();
  }
  emailError() {
    return cy
      .get('#email_errormsg')
      .should('be.visible')
      .and('contain', 'Email is not valid');
  }
  cancelBtn() {
    return cy.get('#cancel').should('be.visible').click();
  }
  bothBtn() {
    return cy.get('#rb_both').click();
  }
  textBtn() {
    return cy.get('#rb_text').click();
  }
  phoneError() {
    return cy
      .get('#phone_errormsg')
      .should('be.visible')
      .and('contain', 'Type a valid phone number');
  }
  doneBtn1() {
    return cy.get('[type="button"]').click();
  }
}
export default invite_to_apply_page;
