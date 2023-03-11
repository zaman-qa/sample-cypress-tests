export class form_page {
  purchaseBtn() {
    return cy.get('#purchase-forms-pack-btn').should('be.visible').click();
  }
  downloadBtn() {
    return cy.get('.download-form-btn');
  }
  searchFrom() {
    return cy.get('#forms-pack-search').should('be.visible');
  }
  downloadOption(downloadtype) {
    return cy.contains('span', downloadtype).should('be.visible');
  }
}
export default form_page;
