export class main_reference {
  welcomeHeader() {
    return cy
      .get('#title')
      .should('be.visible')
      .and('contain', 'Welcome to TurboTenant’s Landlord References!');
  }
  provideReferenceBtn() {
    return cy.get('#provide_reference').should('be.visible').click();
  }
  thankyouText() {
    return cy
      .get('#txt_thanks_prividing_reference')
      .should('be.visible')
      .and('contain', 'Thank you for providing a reference!');
  }
}
export default main_reference;
