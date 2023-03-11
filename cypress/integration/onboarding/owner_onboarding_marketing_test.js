const Utils = require('../../utils/cypress-utils');
import onboarding from '../../pom/onboarding/OnboardingPage';
import onboarding_property_page from '../../pom/onboarding/onBoardingPropertyPage';
import lease_basic_page from '../../pom/onboarding/LeasingBasicsPage';
import permission_page from '../../pom/onboarding/PermissionPage';
import amenities_page from '../../pom/onboarding/AmenitiesPage';
import description_page from '../../pom/onboarding/DescriptionPage';
import marketing_page from '../../pom/onboarding/MarketingPage';
import data from '../../fixtures/onboarding.json';
const onBoarding = new onboarding();
const onBoardingPropertyPage = new onboarding_property_page();
const leasebasicpage = new lease_basic_page();
const PermissionPage = new permission_page();
const amenitiespage = new amenities_page();
const descriptionpage = new description_page();
const marketingPage = new marketing_page();
describe('Owner onboarding - marketing.', () => {
  it('Welcome screen and select marketing option', () => {
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/signup');
    onBoarding.landlord();
    const signup = {
      firstName: 'FirstName',
      lastName: 'LastName',
      password: 'password',
      propertiesCount: '10',
    };
    onBoarding.emailInput().type(Utils.generateTestEmail());
    onBoarding.firstNameInput().type(signup.firstName);
    onBoarding.lastNameInput().type(signup.lastName);
    onBoarding.password().type(signup.password);
    onBoarding.propertiesCountInput().type(signup.propertiesCount);
    onBoarding.radioBtn();
    onBoarding.signUpBtn();
    cy.url().should(
      'eq',
      Cypress.env('TEST_OWNER_URL') + '/onboarding/process',
    );
    //Add Your Rental Property
    onBoarding.marketingOption();
    onBoarding.continueBtn();
    onBoarding.getStartedBtn();
    onBoardingPropertyPage.addressInput().type(data.address);
    onBoardingPropertyPage.cityInput().type(data.city);
    onBoardingPropertyPage.stateInput().select(data.state);
    onBoardingPropertyPage.zipInput().type(data.zip);
    onBoardingPropertyPage.bedroomInput().type(data.bedroom);
    onBoardingPropertyPage.bathroomInput().type(data.bathroom);
    onBoardingPropertyPage.nextBtn();
    const leaseData = {
      availableDate: '06/14/2022',
      leaseTerm: 'MONTHLY',
      rentAmount: '1000',
      securityDepositAmount: '1200',
    };
    leasebasicpage.dateInput().type(leaseData.availableDate);
    leasebasicpage.submitBtn();
    leasebasicpage.monthlyBtn();
    leasebasicpage.rentInput().type(leaseData.rentAmount);
    leasebasicpage.depositInput().type(leaseData.securityDepositAmount);
    leasebasicpage.submitBtn();
    PermissionPage.noSmokingInput();
    PermissionPage.noPetInput();
    PermissionPage.limitInput();
    PermissionPage.submitBtn();
    amenitiespage.amenitiesInput();
    amenitiespage.submitBtn();
    amenitiespage.submitBtn1();
    descriptionpage.tittleInput();
    descriptionpage.descriptionInput();
    descriptionpage.submitBtn();
    const image = 'test.jpeg';
    descriptionpage.imageUpload().attachFile(image);
    descriptionpage.submitBtn1();
    marketingPage.setUpMarketing();
    marketingPage.SMSOption();
    marketingPage.phoneInput();
    marketingPage.sendCodeBtn();
    marketingPage.codeInput();
    marketingPage.verifyBtn();
    marketingPage.letsGoBtn();
    marketingPage.marketingIsOn();
  });
});
