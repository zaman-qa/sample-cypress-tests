export class applicant_list {
  messageBox(msg) {
    return cy
      .get('[data-qa="compose-message-text-input"]')
      .should('be.visible')
      .type(msg);
  }
  sendMessageBtn() {
    return cy.get('[data-qa="send-message-button"]').click();
  }
  inboxMessageApplicant(msg) {
    return cy
      .get('[data-qa="message-item-container-0"]')
      .should('contain', msg);
  }
  openMessage() {
    return cy.get('[data-qa="chat-0"]').should('be.visible').click();
  }
  messageBox1(msg) {
    return cy.get('[data-qa="message-form"]').should('be.visible').type(msg);
  }
  sendMessageBtn1() {
    return cy
      .get('[data-qa="send-message-desktop"]')
      .should('be.visible')
      .click();
  }
  inboxMessageOwner(msg) {
    return cy
      .get('[data-qa="message-item-container-1"]')
      .should('contain', msg);
  }
}
export default applicant_list;
