/* eslint-disable cypress/no-async-tests */

const fixtureUtils = require('../../utils/fixture-utils');
import loginPage from '../../pom/owner/owner_login_page';
const fixturesData = require('../../fixtures/owner_login');

describe('Login Page', () => {
  const login_Page = new loginPage();
  let dataFromServer;

  before(async () => {
    dataFromServer = await fixtureUtils.getOwnerFixtures(fixturesData.data());
  });
  beforeEach(() => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
  });

  it('Error when attempting log in with existing email but wrong password', () => {
    let owner_email = dataFromServer['confirmed_owner'].rawData['email'];
    login_Page.emailInput().type(owner_email);
    login_Page.passwordInput().type('invalidpassword');
    login_Page.submitBtn().click();
    login_Page.errorMsg();
  });

  it('Error when attempting log in with email that doesn’t exist', () => {
    login_Page.emailInput().type('invaliduser@turbotenant.com');
    login_Page.passwordInput().type('password');
    login_Page.submitBtn().click();
    login_Page.errorMsg();
  });

  it('Error when attempting log in with existing email but blank password', () => {
    // act
    let owner_email = dataFromServer['confirmed_owner'].rawData['email'];
    login_Page.emailInput().type(owner_email);
    login_Page.submitBtn().click();
    // assert
    login_Page.passwordError();
  });

  it('Successful log in', async () => {
    console.log(dataFromServer['confirmed_owner']);

    let owner_email = dataFromServer['confirmed_owner'].rawData['email'];
    let owner_password = dataFromServer['confirmed_owner'].rawData['password'];
    login_Page.emailInput().type(owner_email);
    login_Page.passwordInput().type(owner_password);
    login_Page.submitBtn().click();
    login_Page
      .ownerNameOnDashboard()
      .and('contain', dataFromServer['confirmed_owner'].rawData['first_name']);
  });
});
