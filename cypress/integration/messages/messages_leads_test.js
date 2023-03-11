const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/messages_leads_fixtures');
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import messagePage from '../../pom/messages/MessagePage';
import leadPage from '../../pom/leads/AddLeadPage';

let ownerFixtures, owner, lead;
const login_Page = new loginPage();
const nav_bar = new navBar();
const lead_page = new leadPage();
const message_page = new messagePage();
const msgOwnerToLead = 'Message 1 from Owner to Lead';
const msgLeadToOwner = 'Message 2 from Lead to Owner';
describe('Owner Lead Messages', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['owner1']);
    cy.log(ownerFixtures['owner1']);
    owner = serverResponse.data['owner1'];
    lead = serverResponse.data['renter1'];
  });
  it('Send message to Lead', () => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.leads();
    lead_page.leadsHeader();
    lead_page.openLead();
    lead_page.messageTab();
    message_page.messageBox(msgOwnerToLead);
    message_page.sendMessageBtn();
  });
  it('Read message in lead UI', () => {
    cy.visit('https://stefan-renter.turbotenant.com/auth/login');
    cy.Logout();
    login_Page.emailInput().type(lead.rawData['email']);
    login_Page.passwordInput().type(lead.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.messages();
    message_page.openMessage();
    message_page.inboxMessageApplicant(msgOwnerToLead);
  });
  it('Send message in Applicant UI', () => {
    cy.visit('https://stefan-renter.turbotenant.com/auth/login');
    cy.Logout();
    login_Page.emailInput().type(lead.rawData['email']);
    login_Page.passwordInput().type(lead.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.messages();
    message_page.openMessage();
    message_page.inboxMessageApplicant(msgOwnerToLead);
    message_page.messageBox1(msgLeadToOwner);
    message_page.sendMessageBtn1();
  });
  it('Read message in Owner UI', () => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.messages();
    message_page.openMessage();
    message_page.inboxMessageOwner(msgLeadToOwner);
  });
});
