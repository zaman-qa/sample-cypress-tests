const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/messages_tenants_fixtures');
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import messagePage from '../../pom/messages/MessagePage';
import tenantListPage from '../../pom/tenants/TenantListingPage';
import tenantdetailPage from '../../pom/tenants/TenantDetailPage';

let ownerFixtures, owner, tenant;
const login_Page = new loginPage();
const nav_bar = new navBar();
const tenant_list_page = new tenantListPage();
const message_page = new messagePage();
const tenant_detail_page = new tenantdetailPage();
const msgOwnerToTenant = 'Message 1 from Owner to Tenant';
const msgTenantToOwner = 'Message 2 from Tenant to Owner';
describe('Owner Tenant Messages', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['owner1']);
    cy.log(ownerFixtures['owner1']);
    owner = serverResponse.data['owner1'];
    tenant = serverResponse.data['renter1'];
  });
  it('Send message to Lead', () => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.tenants();
    tenant_list_page.tenantHeader();
    tenant_list_page.viewTenant();
    tenant_detail_page.messageTab();
    message_page.messageBox(msgOwnerToTenant);
    message_page.sendMessageBtn();
  });
  it('Read message in lead UI', () => {
    cy.visit(Cypress.env('TEST_RENTER_URL') + '/auth/login');
    cy.Logout();
    login_Page.emailInput().type(tenant.rawData['email']);
    login_Page.passwordInput().type(tenant.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.messages();
    message_page.openMessage();
    message_page.inboxMessageApplicant(msgOwnerToTenant);
  });
  it('Send message in Tenant UI', () => {
    cy.visit(Cypress.env('TEST_RENTTER_URL') + '/auth/login');
    cy.Logout();
    login_Page.emailInput().type(tenant.rawData['email']);
    login_Page.passwordInput().type(tenant.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.messages();
    message_page.openMessage();
    message_page.inboxMessageApplicant(msgOwnerToTenant);
    message_page.messageBox1(msgTenantToOwner);
    message_page.sendMessageBtn1();
  });
  it('Read message in Owner UI', () => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.messages();
    message_page.openMessage();
    message_page.inboxMessageOwner(msgTenantToOwner);
  });
});
