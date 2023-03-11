/* eslint-disable cypress/no-unnecessary-waiting */
export class esignRenter {
  requestedHeader() {
    return cy
      .get('#title')
      .should('be.visible')
      .and('contain', 'Your Signature is Requested!');
  }
  signDocument() {
    return cy.get('#sign_the_document').should('be.visible').click();
  }
  textOnPopup() {
    cy.wait(10000);
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('.m-signature-request-preview--test-warning--content')
      .should('be.visible')
      .and('contain', 'This is not legally binding');
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('.m-signature-request-preview--test-warning--content')
      .should('be.visible')
      .and(
        'contain',
        'This is a mock signature request and has no legal value.',
      );
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('[data-btn="common"]')
      .eq(1)
      .click();
  }
  clicktoSignBtn() {
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('[data-qa-ref="signature-input"]')
      .should('be.visible')
      .click();
  }
  signModal() {
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('[data-qa-ref="signing-modal--T"]')
      .should('be.visible')
      .click();
    cy.wait(1000);
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('[data-qa-ref="signing-modal--type-in-field"]')
      .clear()
      .type('My Sig');
    cy.wait(1000);
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('[data-qa-ref="singing-modal--insert-btn"]')
      .should('be.visible')
      .click();
  }
  validationText() {
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('[data-qa-ref="validation-error"]')
      .should('be.visible');
  }
  continueBtn() {
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('button[data-qa-ref="button-next"]')
      .should('be.visible')
      .click();
  }
  iAgreeBtn() {
    cy.getIframeBody('.x-hellosign-embedded__iframe')
      .find('button[data-qa-ref="button-agree"]')
      .should('be.visible')
      .click();
  }
  renterDashboard() {
    cy.get('[data-qa="renter-dashboard-page"]').should('be.visible');
  }
}
export default esignRenter;
