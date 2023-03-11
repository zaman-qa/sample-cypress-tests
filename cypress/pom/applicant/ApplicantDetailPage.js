export class applicant_detail {
  messageTab() {
    return cy
      .get('[data-qa="renter-profile-tab-messages"]')
      .should('be.visible')
      .click();
  }
  viewReference() {
    return cy.get('#view_the_reference').should('be.visible').click();
  }
  overAllText() {
    return cy
      .get('#overall_text')
      .should('be.visible')
      .and('contain', "Yes, I'd rent to them again in a heart beat.");
  }
  editBtn() {
    return cy
      .get('[data-qa="renter-profile-edit-application-edit-button"]')
      .should('be.visible')
      .click();
  }
  listingSelect() {
    return cy
      .get('[data-qa="edit-application-modal-listing-select"]')
      .should('be.visible')
      .select(0);
  }
  saveBtn() {
    return cy
      .get('[data-qa="edit-application-modal-submit-button"]')
      .should('be.visible')
      .click();
  }
  applicantTittle() {
    return cy
      .get('[data-qa="renter-profile-applicant-title"]')
      .should('be.visible');
  }
}
export default applicant_detail;
