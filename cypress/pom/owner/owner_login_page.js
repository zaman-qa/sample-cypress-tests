export class login_page {
  emailInput() {
    return cy.get('input[id=user]').should('be.visible');
  }
  passwordInput() {
    return cy.get('input[id=password]').should('be.visible');
  }
  submitBtn() {
    return cy.get('[type=submit]').should('be.visible');
  }
  ownerNameOnDashboard() {
    return cy.get('._3NqaN8JVMAr7jbUjN0KAs5').should('be.visible');
  }
  errorMsg() {
    cy.contains('Wrong email or password.').should('be.visible');
  }
  passwordError() {
    cy.contains('This value is required').should('be.visible');
  }
}
export default login_page;
