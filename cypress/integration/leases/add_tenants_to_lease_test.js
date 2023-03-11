/* eslint-disable cypress/no-async-tests */
const moment = require('moment');
const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/owner_login');
import leaseIndexPage from '../../pom/lease_management/LeasesIndexTestPage';
import addLeasePage from '../../pom/lease_management/LeaseAddTestPage';
import loginPage from '../../pom/owner/owner_login_page';
import defaultLease from '../../fixtures/defaultlease.json';
let ownerFixtures, owner;
describe('Lease Management:Add/Remove Lease', () => {
  const leases_Index_Page = leaseIndexPage();
  const add_lease_page = new addLeasePage();
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['confirmed_owner']);
    owner = serverResponse.data['confirmed_owner'];
  });
  beforeEach(() => {
    const login_Page = new loginPage();
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Adds new lease', () => {
    leases_Index_Page.goToLeasesIndex();
    leases_Index_Page.checkTitle();
    leases_Index_Page.goToAddLease();
    add_lease_page.addLeaseTitle();
    //cy.wait(1000)
    add_lease_page.nickInput().type(defaultLease.nick);
    //cy.wait(1000)
    add_lease_page
      .startDateInput()
      .type(moment(new Date(Date.now())).format('MM-DD-YYYY'));
    //cy.wait(1000)
    add_lease_page
      .endDateInput()
      .type(
        moment(new Date(Date.now() + 30 * 24 * 360000)).format('MM-DD-YYYY'),
      );
    //cy.wait(1000)
    add_lease_page.endActionBtn().click({ force: true });
    add_lease_page.addLeaseBtn().click();
  });
  it('Add tenant to the lease', () => {
    const data = {
      firstName: owner.rawData['first_name'],
      lastName: owner.rawData['last_name'],
      telephone: '500-555-0005',
      email: owner.rawData['email'],
    };
    leases_Index_Page.goToLeasesIndex();
    leases_Index_Page.checkTitle();
    add_lease_page.openLease();
    add_lease_page.addTenantBtn().click();
    add_lease_page.tenantFirstNameInput().type(data.firstName);
    add_lease_page.tenantEmailInput().type(data.email);
    add_lease_page.tenantLastNameInput().type(data.lastName);
    add_lease_page.tenantTelephoneInput().type(data.telephone);
    add_lease_page.saveTenantBtn().click();
    add_lease_page
      .verifyTenantName()
      .contains(owner.rawData['first_name'] + ' ' + owner.rawData['last_name']);
  });
});
