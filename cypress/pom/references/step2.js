export class step2_reference {
  renterHeader() {
    return cy
      .get('#step2_title')
      .should('be.visible')
      .and('contain', 'What about their payment history?');
  }
  fillStep2() {
    cy.get('#rent_amount').type('1300');
    cy.get('#payment_on_time_YES').click();
    cy.get('#next_move_out').click();
  }
}
export default step2_reference;
