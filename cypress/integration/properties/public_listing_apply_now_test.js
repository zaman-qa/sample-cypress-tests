/* eslint-disable no-unused-vars */
const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/public_listing');
import propertyViewPage from '../../pom/property/PropertyViewPage';
async function propertySetup(email, hidden) {
  fetch(`Cypress.env("TEST_OWNER_URL")` + '/test/set_apply_now', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      hidden,
    }),
  });
}

let Fixtures, listingId, email;
const property_View_Page = new propertyViewPage();
describe('Public listing apply now', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    Fixtures = serverResponse.data;
    console.log(Fixtures['owner1']);
    cy.log(Fixtures['owner1']);
    email = serverResponse.data.owner1.rawData['email'];
    cy.log(email);
    listingId = serverResponse.data.listing1.id;
    cy.log(listingId);
  });
  it('Public listing page loads with apply now button', () => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + `/properties/${listingId}`);
    property_View_Page.applyNowBtn();
    property_View_Page.applyAsTenantBtn();
  });
  // it("Hide apply now button and verify", () => {
  //   propertySetup(email,"true")
  //   cy.visit(Cypress.env("TEST_OWNER_URL") + `/properties/${listingId}`)
  //   //property_View_Page.applyNowBtn()
  // })
});
