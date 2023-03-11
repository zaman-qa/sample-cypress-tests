const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/messages_applicants');
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import applicantDetailPage from '../../pom/applicant/ApplicantDetailPage';
import applicantIndexPage from '../../pom/applicant/ApplicantListingPage';
import messagePage from '../../pom/messages/MessagePage';

let ownerFixtures, owner, applicant;
const login_Page = new loginPage();
const nav_bar = new navBar();
const applicant_list = new applicantIndexPage();
const applicant_detail = new applicantDetailPage();
const message_page = new messagePage();
const msgOwnerToApplicant = 'Message 1 from Owner to Applicant';
const msgApplicantToOwner = 'Message 2 from Applicant to Owner';
describe('Owner Applicant Messages', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['owner_1']);
    cy.log(ownerFixtures['owner_1']);
    owner = serverResponse.data['owner_1'];
    applicant = serverResponse.data['renter_1'];
  });
  it('Send message to Applicant', () => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.applicants();
    applicant_list.applicantHeader();
    applicant_list.viewApplicantBtn();
    applicant_detail.messageTab();
    message_page.messageBox(msgOwnerToApplicant);
    message_page.sendMessageBtn();
  });
  it('Read message in Applicant UI', () => {
    cy.visit('https://stefan-renter.turbotenant.com/auth/login');
    cy.Logout();
    login_Page.emailInput().type(applicant.rawData['email']);
    login_Page.passwordInput().type(applicant.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.messages();
    message_page.openMessage();
    message_page.inboxMessageApplicant(msgOwnerToApplicant);
  });
  it('Send message in Applicant UI', () => {
    cy.visit('https://stefan-renter.turbotenant.com/auth/login');
    cy.Logout();
    login_Page.emailInput().type(applicant.rawData['email']);
    login_Page.passwordInput().type(applicant.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.messages();
    message_page.openMessage();
    message_page.inboxMessageApplicant(msgOwnerToApplicant);
    message_page.messageBox1(msgApplicantToOwner);
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
    message_page.inboxMessageOwner(msgApplicantToOwner);
  });
});
