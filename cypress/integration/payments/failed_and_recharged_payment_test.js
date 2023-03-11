const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/failed_and_recharged_payments');
import loginPage from '../../pom/owner/owner_login_page';
import dashboard from '../../pom/navigation/dashboard';
import renter_payment_page from '../../pom/renter/RenterPaymentPage';

let renterFixtures, renter;
const login_Page = new loginPage();
const dashboard_page = new dashboard();
const renter_payment = new renter_payment_page();
describe('Failed and Recharged Payments', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    renterFixtures = serverResponse.data;
    console.log(renterFixtures['renter1']);
    cy.log(renterFixtures['renter1']);
    renter = serverResponse.data['renter1'];
  });
  beforeEach(() => {
    cy.visit('https://stefan-renter.turbotenant.com/auth/login');
    cy.Logout();
    login_Page.emailInput().type(renter.rawData['email']);
    login_Page.passwordInput().type(renter.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Tenant Go To Payment page and see recharge and failed', () => {
    dashboard_page.paymentTab();
    renter_payment.selectPayment();
    renter_payment.failedPaymentText();
  });
  it('Tenant Make a Payment from Recharge link ', () => {
    dashboard_page.paymentTab();
    renter_payment.makePaymentBtn();
    renter_payment.transactionBtn();
    renter_payment.makePaymentBtn1();
  });
});
