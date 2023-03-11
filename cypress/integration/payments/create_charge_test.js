const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/payments_create_charge');
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import leaseIndexPage from '../../pom/lease_management/LeasesIndexTestPage';
import addLeasePage from '../../pom/Lease_Management/LeaseAddTestPage';
import chargePage from '../../pom/payments/CreateChargePage';

let ownerFixtures, owner;
const login_Page = new loginPage();
const nav_bar = new navBar();
const leases_index_page = leaseIndexPage();
const add_lease_page = new addLeasePage();
const charge_page = new chargePage();
describe('Payments create charge', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['owner1']);
    cy.log(ownerFixtures['owner1']);
    owner = serverResponse.data['owner1'];
  });
  beforeEach(() => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Create One-Time Charge', () => {
    nav_bar.leases();
    leases_index_page.checkTitle();
    add_lease_page.openLease();
    charge_page.paymentTab();
    charge_page.createChargeBtn();
    charge_page.oneTimeCharge();
    charge_page.nextBtn();
    charge_page.categoryDropDown();
    charge_page.descriptionInput();
    charge_page.amountInput();
    charge_page.endDateInput();
    charge_page.createChargeNextBtn();
    charge_page.reviewHeader();
    charge_page.reviewChargeBtn();
    charge_page.allowPartialPayments();
    charge_page.allowAutoPay();
    charge_page.saveSettingBtn();
    charge_page.sendCharge();
  });
});
