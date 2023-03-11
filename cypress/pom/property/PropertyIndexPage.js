export class property_index_page {
  openProperty() {
    return cy
      .get('[data-qa="manage-property-clickable-container"]')
      .should('be.visible')
      .click();
  }
}
export default property_index_page;
