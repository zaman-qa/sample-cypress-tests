export class applicant_list {
  applicantHeader() {
    return cy.get('#tab-header-title').should('be.visible');
  }
  viewApplicantBtn() {
    return cy.get('[data-qa="view-applicant-0-button"]').eq(0).click();
  }
}
export default applicant_list;
