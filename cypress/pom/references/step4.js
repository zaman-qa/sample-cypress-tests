export class step4_reference {
  renterHeader() {
    return cy
      .get('#step4_title')
      .should('be.visible')
      .and('contain', 'Overall, would you rent to this person again?');
  }
  fillStep4() {
    cy.get('#POSITIVE').click();
    cy.get('#overall_explain').type('Explain!');
    cy.get('#send_reference').click();
  }
}
export default step4_reference;
