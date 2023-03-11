const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/failed_and_recharged_payments');
import loginPage from '../../pom/owner/owner_login_page';
import dashboard from '../../pom/navigation/dashboard';
import renter_payment_page from '../../pom/renter/RenterPaymentPage';
import postCheckin from '../../pom/renter/PostCheckIn';
import leaseIndexPage from '../../pom/lease_management/LeasesIndexTestPage';
import addLeasePage from '../../pom/lease_management/LeaseAddTestPage';

let renterFixtures, renter, owner;
const login_Page = new loginPage();
const dashboard_page = new dashboard();
const renter_payment = new renter_payment_page();
const post_checkin = new postCheckin();
const leases_Index_Page = leaseIndexPage();
const add_lease_page = new addLeasePage();
describe('Renter makes payment', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    renterFixtures = serverResponse.data;
    console.log(renterFixtures['renter1']);
    cy.log(renterFixtures['renter1']);
    renter = serverResponse.data['renter1'];
    owner = serverResponse.data['owner1'];
  });
  beforeEach(() => {
    cy.visit('https://stefan-renter.turbotenant.com/auth/login');
    cy.Logout();
    login_Page.emailInput().type(renter.rawData['email']);
    login_Page.passwordInput().type(renter.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Post check in', () => {
    dashboard_page.paymentTab();
    renter_payment.makePaymentBtn();
    renter_payment.transactionBtn();
    renter_payment.makePaymentBtn1();
    post_checkin.DoneBtn();
    post_checkin.GoodBtn();
    post_checkin.detailsInput();
    post_checkin.maintenanceRequest();
    post_checkin.sendBtn();
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
    leases_Index_Page.goToLeasesIndex();
    leases_Index_Page.checkTitle();
    add_lease_page.openLease();
  });
});
