export class step3_reference {
  renterHeader() {
    return cy
      .get('#step3_title')
      .should('be.visible')
      .and('contain', 'How was the move-out experience?');
  }
  fillStep3() {
    cy.get('#move_out_notice_NO').click();
    cy.get('#move_out_undamaged_YES').click();
    cy.get('#move_out_deduct_NO').click();
    cy.get('#move_out_debt_NO').click();
    cy.get('#next_overall_score').click();
  }
}
export default step3_reference;
