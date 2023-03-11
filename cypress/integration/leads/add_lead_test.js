/* eslint-disable cypress/no-async-tests */
const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/leads_fixture');
import loginPage from '../../pom/owner/owner_login_page';
import leadPage from '../../pom/leads/AddLeadPage';

let ownerFixtures, owner;
const login_Page = new loginPage();
const lead_Page = new leadPage();
describe('Leads', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['owner1']);
    owner = serverResponse.data['owner1'];
  });
  beforeEach(() => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Add lead', () => {
    lead_Page.leadsNavBar().click();
    lead_Page.leadsHeader();
    lead_Page.addNewBtn();
    lead_Page.addNewLeadModal();
    lead_Page.propertyDropDown();
    lead_Page.firstNameInput();
    lead_Page.lastNameInput();
    lead_Page.emailInput();
    lead_Page.phoneInput();
    lead_Page.saveBtn();
    lead_Page.verifyLead();
  });
});
