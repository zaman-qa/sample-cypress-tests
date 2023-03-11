const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/forms_pack');
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import formPage from '../../pom/form/FormPage';
import leaseEsignOwner from '../../pom/Lease_Management/Lease_Esign_Owner_Page';
let ownerFixtures, owner;
const login_Page = new loginPage();
const nav_bar = new navBar();
const form_page = new formPage();
const lease_esign_owner = new leaseEsignOwner();
describe('Owner Forms Pack', () => {
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
  it('Check forms are listed and download btn is not present', () => {
    nav_bar.forms();
    cy.get('.form-item-title').should('be.visible');
    cy.get('#download-form-btn').should('not.exist');
  });
  it('Purchase forms and check that download button appears', () => {
    nav_bar.forms();
    form_page.purchaseBtn();
    lease_esign_owner.oneTimeBtn();
    lease_esign_owner.payBtn();
    form_page.downloadBtn().should('be.visible');
  });
  it('Search forms by title', () => {
    nav_bar.forms();
    form_page.searchFrom().type('of Termination');
    cy.get('.form-item-title').should('be.visible');
  });
  it('Check download types for word file', () => {
    nav_bar.forms();
    // form_page.purchaseBtn()
    // lease_esign_owner.oneTimeBtn()
    // lease_esign_owner.payBtn()
    form_page.searchFrom().type('of Termination');
    cy.get('.form-item-title').should('be.visible');
    form_page.downloadBtn().should('be.visible').click();
    form_page.downloadOption('Microsoft Word');
    form_page.downloadOption('Google Doc');
  });
});
