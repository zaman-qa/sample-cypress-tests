const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/property_edit_fixtures');
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import propertyIndexPage from '../../pom/property/PropertyIndexPage';
import propertyViewPage from '../../pom/property/PropertyViewPage';
import propertyEditPage from '../../pom/property/PropertyEditPage';

let ownerFixtures, owner;
const login_Page = new loginPage();
const nav_bar = new navBar();
const property_index_page = new propertyIndexPage();
const property_view_page = new propertyViewPage();
const property_edit_page = new propertyEditPage();
describe('Edit Property', () => {
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
  it('Edit Property Information', () => {
    nav_bar.property();
    property_index_page.openProperty();
    property_view_page.editProperty();
    property_edit_page.editPropertyInformation();
    property_edit_page.editTitle();
    property_edit_page.editAddress();
    property_edit_page.editCity();
    property_edit_page.selectPropertyType();
    property_edit_page.inputBedrooms();
    property_edit_page.inputBathroom();
    property_edit_page.inputDescription();
    property_edit_page.savePropertyInformation();
    property_edit_page.editLeaseInformation();
    property_edit_page.inputRent();
    property_edit_page.inputSecurityDeposit();
    property_edit_page.saveLeaseInformation();
    property_edit_page.editAmenities();
    property_edit_page.clickElements();
    property_edit_page.saveAmenities();
  });
});
