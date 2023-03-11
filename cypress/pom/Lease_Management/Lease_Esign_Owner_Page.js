/* eslint-disable cypress/no-unnecessary-waiting */
export class lease_esign_owner {
  requestSign() {
    return cy
      .contains('p', 'Upload any document you need signed')
      .should('be.visible')
      .click();
  }
  getStartedBtn() {
    return cy.get('#get_started').should('be.visible').click();
  }
  oneTimeBtn() {
    return cy.get('#one-time-payment').should('be.visible').click();
  }
  payBtn() {
    return cy.get('#payment-action').should('be.visible').click();
  }
  nextBtn() {
    return cy.get('#payment-successful-next').should('be.visible').click();
  }
  nextAddSignersBtn() {
    return cy.get('#next_add_signers').should('be.visible').click();
  }
  messageToSignersInput() {
    return cy.get('#message').should('be.visible').type('Message to signers!');
  }
  requestBtn() {
    return cy.get('#request_signature').should('be.visible').click();
  }
  requestSignDoc() {
    cy.get('.x-hellosign-embedded__iframe').should('be.visible');
    cy.wait(10000);
    cy.frameLoaded('.x-hellosign-embedded__iframe')
      .iframeCustom()
      .find('[data-qa-ref="editor-iframe"]')
      .iframeCustom()
      .should('be.visible')
      .find('[data-qa-ref="page-image"]')
      .eq(0)
      .click();
    cy.frameLoaded('.x-hellosign-embedded__iframe')
      .iframeCustom()
      .find('[data-qa-ref="editor-iframe"]')
      .iframeCustom()
      .should('be.visible')
      .find('[data-qa-ref="fields-assigned-to"]')
      .click();
    cy.frameLoaded('.x-hellosign-embedded__iframe')
      .iframeCustom()
      .find('[data-qa-ref="editor-iframe"]')
      .iframeCustom()
      .should('be.visible')
      .find('[data-qa-ref="dropdown-item"]')
      .eq(1)
      .click();
    cy.frameLoaded('.x-hellosign-embedded__iframe')
      .iframeCustom()
      .find('[data-qa-ref="editor-iframe"]')
      .iframeCustom()
      .should('be.visible')
      .find('#page-0 img')
      .eq(0)
      .click(20, 20, { force: true });
    cy.frameLoaded('.x-hellosign-embedded__iframe')
      .iframeCustom()
      .find('[data-qa-ref="editor-iframe"]')
      .iframeCustom()
      .should('be.visible')
      .find('#page-0 img')
      .eq(0)
      .click(20, 20, { force: true });
    cy.frameLoaded('.x-hellosign-embedded__iframe')
      .iframeCustom()
      .find('[data-qa-ref="editor-iframe"]')
      .iframeCustom()
      .should('be.visible')
      .find('[data-qa-ref="continue-button-prepare-docs"]')
      .click();
  }
  soundsGoodBtn() {
    return cy.get('#sounds_good_signature_set').should('be.visible').click();
  }
  leaseStatus() {
    return cy.get('#lease-view-status').should('be.visible');
  }
  signerRquest() {
    let renterEmail;
    cy.get('.signer-request-item-renter-email')
      .should('be.visible')
      .then(($signer) => {
        renterEmail = $signer.text();
        cy.log(renterEmail);
      });
    return renterEmail;
  }
}
export default lease_esign_owner;
