/* eslint-disable no-unused-vars */
/* eslint-disable cypress/no-async-tests */
const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData1 = require('../../fixtures/lease_items_tenant_access');
const testUtils = require('../../utils/test-utils');
import loginPage from '../../pom/owner/owner_login_page';
import dashBoard from '../../pom/navigation/dashboard';

let renterFixtures,
  renter,
  maintenanceRequestVisible,
  maintenanceRequestVisibleId,
  maintenanceRequestNoAccess,
  maintenanceRequestNoAccessId,
  paymentRequestVisible,
  paymentRequestVisibleId,
  paymentRequestNoAccess,
  paymentRequestNoAccessId;
const login_Page = new loginPage();
const dashboard = new dashBoard();
describe('Archived Tenant access to lease items', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData1.data(),
    );
    renterFixtures = serverResponse.data;
    console.log(renterFixtures['renter_1']);
    renter = serverResponse.data['renter_1'];
    maintenanceRequestVisible =
      serverResponse.data['maintenance_request_1'].modelData;
    maintenanceRequestVisibleId = testUtils.encodeId(
      'MaintenanceRequest',
      maintenanceRequestVisible.id,
    );
    maintenanceRequestNoAccess =
      serverResponse.data['maintenance_request_2'].modelData;
    maintenanceRequestNoAccessId = testUtils.encodeId(
      'MaintenanceRequest',
      maintenanceRequestNoAccess.id,
    );
    paymentRequestVisible = serverResponse.data['payment_request_1'].modelData;
    paymentRequestVisibleId = testUtils.encodeId(
      'PaymentRequest',
      paymentRequestVisible.id,
    );
    paymentRequestNoAccess = serverResponse.data['payment_request_2'].modelData;
    paymentRequestNoAccessId = testUtils.encodeId(
      'PaymentRequest',
      paymentRequestNoAccess.id,
    );
  });
  beforeEach(() => {
    cy.visit(Cypress.env('TEST_RENTER_URL') + '/auth/login');
    cy.Logout();
    login_Page.emailInput().type(renter.rawData['email']);
    login_Page.passwordInput().type(renter.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Archived Tenant cannot access newer documents', () => {
    dashboard.documentTab();
    dashboard.tenantCanSee();
    cy.get('[data-qa="file-name-document-2-tenant-cannot-see-this"]').should(
      'not.exist',
    );
  });
  it('Archived Tenant cannot access newer maintenance requests', () => {
    dashboard.maintenanceTab();
    cy.get(
      `[data-qa="maintenance-request-id-${maintenanceRequestVisibleId}"]`,
    ).should('be.visible');
    cy.get(
      `[data-qa="maintenance-request-id-${maintenanceRequestNoAccessId}"]`,
    ).should('not.exist');
  });
  it('Archived Tenant cannot access newer payment requests', () => {
    dashboard.paymentTab();
    cy.get(`[data-qa="payment-request-id-${paymentRequestVisibleId}"]`).should(
      'be.visible',
    );
    cy.get(`[data-qa="payment-request-id-${paymentRequestNoAccessId}"]`).should(
      'not.exist',
    );
  });
});
