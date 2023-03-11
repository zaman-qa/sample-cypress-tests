const Utils = require('../../utils/cypress-utils');
import onboarding from '../../pom/onboarding/OnboardingPage';
import onboarding_property_page from '../../pom/onboarding/onBoardingPropertyPage';
import invite_page from '../../pom/onboarding/InvitePage';
import data from '../../fixtures/onboarding.json';
const onBoarding = new onboarding();
const onBoardingPropertyPage = new onboarding_property_page();
const invitePage = new invite_page();
describe('Owner onboarding - application.', () => {
  it('Welcome screen and select application option', () => {
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
    onBoarding.applicationOption();
    onBoarding.continueBtn();
    // onBoarding.getStartedBtn()
    onBoardingPropertyPage.addressInput().type(data.address);
    onBoardingPropertyPage.cityInput().type(data.city);
    onBoardingPropertyPage.stateInput().select(data.state);
    onBoardingPropertyPage.zipInput().type(data.zip);
    onBoardingPropertyPage.bedroomInput().type(data.bedroom);
    onBoardingPropertyPage.bathroomInput().type(data.bathroom);
    onBoardingPropertyPage.rentInput().type(data.rent);
    onBoardingPropertyPage.depositInput().type(data.deposit);
    onBoardingPropertyPage.nextBtn();
    invitePage.firstInput().type(data.firstName);
    invitePage.secondsInput().type(data.lastName);
    invitePage.emailInput().type(data.email);
    invitePage.phoneInput().type(data.phone);
    invitePage.sendInviteBtn();
    onBoardingPropertyPage.addressInput().type(data.address);
    onBoardingPropertyPage.cityInput().type(data.city);
    onBoardingPropertyPage.stateInput().select(data.state);
    onBoardingPropertyPage.zipInput().type(data.zip);
    invitePage.phoneInput().type(data.phone);
    invitePage.finishBtn();
    invitePage.doneBtn();
    invitePage.nothingForNow();
  });
});
