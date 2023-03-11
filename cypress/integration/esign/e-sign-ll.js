const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/esign_fixture');
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import leaseIndexPage from '../../pom/lease_management/LeasesIndexTestPage';
import addLeasePage from '../../pom/lease_management/LeaseAddTestPage';
import leaseEsignOwner from '../../pom/Lease_Management/Lease_Esign_Owner_Page';
import eSignRenter from '../../pom/e-sign/E-sginRenter';
let ownerFixtures, owner, renterEmail, RequestId;
const login_Page = new loginPage();
const nav_Bar = new navBar();
const leases_Index_Page = leaseIndexPage();
const add_lease_page = new addLeasePage();
const lease_Esign_Owner = new leaseEsignOwner();
const e_Sign_Fixture = new eSignRenter();
describe('Esign Requests Signature', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['confirmed_owner']);
    owner = serverResponse.data['owner1'];
  });
  it('Request E-Sign', () => {
    cy.visit('https://stefan-owner.turbotenant.com/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
    const documentpdf = 'lorem-ipsum.pdf';
    nav_Bar.leases();
    leases_Index_Page.checkTitle();
    add_lease_page.openLease();
    lease_Esign_Owner.requestSign();
    lease_Esign_Owner.getStartedBtn();
    lease_Esign_Owner.oneTimeBtn();
    lease_Esign_Owner.payBtn();
    lease_Esign_Owner.nextBtn();
    add_lease_page.uploadFile().attachFile(documentpdf);
    lease_Esign_Owner.nextAddSignersBtn();
    lease_Esign_Owner.messageToSignersInput();
    lease_Esign_Owner.requestBtn();
    lease_Esign_Owner.requestSignDoc();
    lease_Esign_Owner.soundsGoodBtn();
    lease_Esign_Owner.leaseStatus();
    cy.get('.signer-request-item-renter-email')
      .should('be.visible')
      .then(($signer) => {
        renterEmail = $signer.text();
        cy.log(renterEmail);
      });
    cy.get('.signature-request-list-item')
      .should('be.visible')
      .then(($id) => {
        RequestId = $id.attr('id');
        RequestId = RequestId.slice('signature-request-'.length);
        cy.log(RequestId);
      });
  });
  it('Renter E-Sign', () => {
    cy.visit('https://stefan-renter.turbotenant.com/auth/login');
    cy.Logout();
    cy.request(
      `https://stefan-api.turbotenant.com/test/mailer/renter/requestESignature?email=${encodeURIComponent(
        renterEmail,
      )}&sr_id=${RequestId}`,
    ).as('esign');
    cy.get('@esign').then((response) => {
      expect(response.status).to.eq(200);
      const data = response.body;
      const content = JSON.stringify(data.content);
      const textToFind =
        content.match(/(https:\/\/\w+-fe.turbotenant.com)/) ||
        content.match(/(https:\/\/\w+-renter.turbotenant.com)/) ||
        content.match(/(http:\/\/localhost:3005\/)/);
      const urlStartPosition = content.indexOf(textToFind[0]);
      const urlStart = content.slice(urlStartPosition);
      const urlLastIndex = urlStart.indexOf('"');
      const confirmEmailUrl = urlStart.slice(0, urlLastIndex - 1);
      cy.log(confirmEmailUrl);
      cy.visit(confirmEmailUrl);
      e_Sign_Fixture.requestedHeader();
      e_Sign_Fixture.signDocument();
      e_Sign_Fixture.textOnPopup();
      e_Sign_Fixture.clicktoSignBtn();
      e_Sign_Fixture.signModal();
      e_Sign_Fixture.validationText();
      e_Sign_Fixture.continueBtn();
      e_Sign_Fixture.iAgreeBtn();
      e_Sign_Fixture.renterDashboard();
    });
  });
});
