const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/stripe_id_first_time_renter');
import loginPage from '../../pom/owner/owner_login_page';
import dashboard from '../../pom/navigation/dashboard';
import renter_payment_page from '../../pom/renter/RenterPaymentPage';
import CARD_DATA from '../../fixtures/cardInformation.json';
let renterFixtures, renter;
const login_Page = new loginPage();
const dashboard_page = new dashboard();
const renter_payment = new renter_payment_page();
describe('Stripe ID - First Time Renter', () => {
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
  it('Tenant Add Credit Card, Enters Stripe ID Flow', () => {
    dashboard_page.paymentTab();
    renter_payment.makePaymentBtn();
    renter_payment.popOkBtn();
    renter_payment.creditCard();
    renter_payment.fullNameInput().type(CARD_DATA.name);
    renter_payment.cardNumberInput().type(CARD_DATA.number);
    renter_payment.expDateInput().type(CARD_DATA.expiration);
    renter_payment.cvcInput().type(CARD_DATA.cvc);
    renter_payment.zipCodeInput().type(CARD_DATA.zip);
    renter_payment.saveCard();
    renter_payment.introFlow();
  });
});
