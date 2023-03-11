const fixtureUtils = require('../../utils/fixture-utils');
const fixturesData = require('../../fixtures/ll_references_fixture');
import mainReference from '../../pom/references/MainReferencesPage';
import step1Reference from '../../pom/references/step1';
import step2Reference from '../../pom/references/step2';
import step3Reference from '../../pom/references/step3';
import step4Reference from '../../pom/references/step4';
import loginPage from '../../pom/owner/owner_login_page';
import navBar from '../../pom/navigation/NavBar';
import applicantList from '../../pom/applicant/ApplicantListingPage';
import applicantDetail from '../../pom/applicant/ApplicantDetailPage';

let landlord_reference_email, dataFromServer, owner;
const login_Page = new loginPage();
const main_Reference = new mainReference();
const step1_Reference = new step1Reference();
const step2_Reference = new step2Reference();
const step3_Reference = new step3Reference();
const step4_Reference = new step4Reference();
const nav_bar = new navBar();
const applicant_List = new applicantList();
const applicant_Detail = new applicantDetail();
describe('Landlord References', () => {
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    dataFromServer = serverResponse.data;
    landlord_reference_email =
      dataFromServer['residences1'].rawData['landlord_email'];
    owner = serverResponse.data['owner1'];
  });
  beforeEach(() => {
    cy.visit('https://stefan-owner.turbotenant.com/auth/login');
    cy.ownerLogout();
  });
  it('References', () => {
    cy.request(
      `https://stefan-api.turbotenant.com/test/mailer/owner/askForReference?email=${encodeURIComponent(
        landlord_reference_email,
      )}`,
    ).as('reference');
    cy.get('@reference').then((response) => {
      expect(response.status).to.eq(200);
      const data = response.body;
      const content = JSON.stringify(data.content);
      const textToFind = content.match(/(https:\/\/\w+-owner.turbotenant.com)/);
      const urlStartPosition = content.indexOf(textToFind[0]);
      const urlStart = content.slice(urlStartPosition);
      const urlLastIndex = urlStart.indexOf('"');
      const confirmEmailUrl = urlStart
        .slice(0, urlLastIndex - 1)
        .replace(/&amp;/gi, '&');
      cy.visit(confirmEmailUrl);
    });
    main_Reference.welcomeHeader();
    main_Reference.provideReferenceBtn();
    step1_Reference.renterHeader();
    step1_Reference.fillStep1();
    step2_Reference.renterHeader();
    step2_Reference.fillStep2();
    step3_Reference.renterHeader();
    step3_Reference.fillStep3();
    step4_Reference.renterHeader();
    step4_Reference.fillStep4();
    main_Reference.thankyouText();
    cy.visit('https://stefan-owner.turbotenant.com/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
    nav_bar.applicants();
    applicant_List.applicantHeader();
    applicant_List.viewApplicantBtn();
    applicant_Detail.viewReference();
    applicant_Detail.overAllText();
  });
});
