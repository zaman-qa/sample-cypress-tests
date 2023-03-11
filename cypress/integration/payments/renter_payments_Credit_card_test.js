const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/check_in_with_existing_stripe_account');
import loginPage from '../../pom/owner/owner_login_page';
import dashboard from '../../pom/navigation/dashboard';
import renterReportingPage from '../../pom/renter/RentReportingPage';
import data from '../../fixtures/renterpayment.json';
let renterFixtures, renter;
const login_Page = new loginPage();
const dashboard_page = new dashboard();
const renter_reporting_page = new renterReportingPage();
describe('Renter setup credit reporting', () => {
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
  it('Submit renter reporting info', () => {
    dashboard_page.getStartedBtn();
    renter_reporting_page.ssnInput().type(data.ssn);
    renter_reporting_page.dobInput().type(data.dob);
    renter_reporting_page.ssnInput().click();
    renter_reporting_page.addressInput().type(data.address);
    renter_reporting_page.cityInput().type(data.city);
    renter_reporting_page.stateInput().select(5);
    renter_reporting_page.zipInput().type(data.zip);
    renter_reporting_page.boostMyCredit();
    renter_reporting_page.soundsGoodBtn();
  });
});
