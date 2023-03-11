const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/change_application_listing_fixtures');
import loginPage from '../../pom/owner/owner_login_page';
import NavBar from '../../pom/navigation/NavBar';
import applicantList from '../../pom/applicant/ApplicantListingPage';
import applicantDetail from '../../pom/applicant/ApplicantDetailPage';
let ownerFixtures, owner, listing_1, listing_2;
const login_Page = new loginPage();
const nav_Bar = new NavBar();
const applicant_list = new applicantList();
const applicant_detail = new applicantDetail();
describe('Change Rental Request Listing Applied Too', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['owner_change_listing_1']);
    owner = serverResponse.data['owner_change_listing_1'];
    listing_1 = serverResponse.data['owner_listing_1'];
    listing_2 = serverResponse.data['owner_listing_2'];
  });
  beforeEach(() => {
    cy.visit('https://stefan-owner.turbotenant.com/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
  });
  it('Change listing', () => {
    nav_Bar.applicants();
    applicant_list.viewApplicantBtn();
    applicant_detail
      .applicantTittle()
      .and('contain', listing_1.rawData['address']);
    applicant_detail.editBtn();
    applicant_detail.listingSelect();
    applicant_detail.saveBtn();
    applicant_detail
      .applicantTittle()
      .and('contain', listing_2.rawData['address']);
  });
});
