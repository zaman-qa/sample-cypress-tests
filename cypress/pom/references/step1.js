export class step1_reference {
  renterHeader() {
    return cy
      .get('#title')
      .should('be.visible')
      .and('contain', 'How were they as a renter?');
  }
  fillStep1() {
    cy.get('#lease_agreement_YES').click();
    cy.get('#pet_NO').click();
    cy.get('#smoke_NO').click();
    cy.get('#noise_disturbances_NO').click();
    cy.get('#clean_maintained_YES').click();
    cy.get('#leave_early_NO').click();
    cy.get('#violate_lease_NO').click();
    cy.get('#next_payment_history').click();
  }
}
export default step1_reference;
