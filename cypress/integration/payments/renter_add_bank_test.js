const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/renter_add_bank_manually');
import loginPage from '../../pom/owner/owner_login_page';
import dashboard from '../../pom/navigation/dashboard';
import renter_payment_page from '../../pom/renter/RenterPaymentPage';

let renterFixtures, renter;
const login_Page = new loginPage();
const dashboard_page = new dashboard();
const renter_payment = new renter_payment_page();
describe('Renter add bank manually', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    renterFixtures = serverResponse.data;
    console.log(renterFixtures['renter_1']);
    cy.log(renterFixtures['renter_1']);
    renter = serverResponse.data['renter_1'];
  });
  beforeEach(() => {
    cy.visit('https://stefan-renter.turbotenant.com/auth/login');
    cy.Logout();
    login_Page.emailInput().type(renter.rawData['email']);
    login_Page.passwordInput().type(renter.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Add bank account with verification', () => {
    dashboard_page.paymentTab();
    renter_payment.makePaymentBtn();
    renter_payment.popOkBtn();
    renter_payment.addBankBtn();
    renter_payment.continueBtn();
    renter_payment.manualFlow();
    renter_payment.continueBtn();
    renter_payment.rountingNumber();
    renter_payment.continueBtn();
    renter_payment.accountNumber();
    renter_payment.continueBtn();
    renter_payment.confirmAccountNumber();
    renter_payment.continueBtn();
    renter_payment.personalInput();
    renter_payment.continueBtn();
    renter_payment.NameInput();
    renter_payment.continueBtn();
    renter_payment.continueBtn();
    renter_payment.continueBtn();
    renter_payment.continueBtn();
    renter_payment.understandBtn();
    renter_payment.enterDepositsBtn();
    renter_payment.amountInput();
    renter_payment.continue1Btn();
    renter_payment.amount2Input();
    renter_payment.continue1Btn();
    renter_payment.continue1Btn();
  });
});
