/* eslint-disable cypress/no-async-tests */
const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData1 = require('../../fixtures/lease_remove_tenant');
import leaseIndexPage from '../../pom/lease_management/LeasesIndexTestPage';
import addLeasePage from '../../pom/lease_management/LeaseAddTestPage';
import loginPage from '../../pom/owner/owner_login_page';

let ownerFixtures, owner;
describe('Lease Management:Removes Tenants from Lease', () => {
  const leases_Index_Page = leaseIndexPage();
  const add_lease_page = new addLeasePage();
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData1.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['owner_1']);
    owner = serverResponse.data['owner_1'];
  });
  beforeEach(() => {
    const login_Page = new loginPage();
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Removes a tenants from lease', () => {
    leases_Index_Page.goToLeasesIndex();
    leases_Index_Page.checkTitle();
    add_lease_page.openLease();
    add_lease_page.editTenant();
    add_lease_page.convertApplicant();
    add_lease_page.saveBtn();
  });
});
