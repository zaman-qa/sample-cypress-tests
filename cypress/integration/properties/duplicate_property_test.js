const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/property_edit_fixtures');
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import propertyIndexPage from '../../pom/property/PropertyIndexPage';
import propertyViewPage from '../../pom/property/PropertyViewPage';

let ownerFixtures, owner;
const login_Page = new loginPage();
const nav_bar = new navBar();
const property_index_page = new propertyIndexPage();
const property_view_page = new propertyViewPage();
describe('Duplicate Property', () => {
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
  it('Duplicate Property', () => {
    nav_bar.property();
    property_index_page.openProperty();
    property_view_page.moreBtn();
    property_view_page.duplicateBtn();
    property_view_page.confirmDuplicated();
    property_view_page.popupTitle();
  });
});
