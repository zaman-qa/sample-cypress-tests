const Utils = require('../../utils/cypress-utils');
import onboarding from '../../pom/onboarding/OnboardingPage';
import onboarding_property_page from '../../pom/onboarding/onBoardingPropertyPage';
import screening_page from '../../pom/onboarding/ScreeningPage';
import data from '../../fixtures/onboarding.json';
const onBoarding = new onboarding();
const onBoardingPropertyPage = new onboarding_property_page();
const screeningpage = new screening_page();
describe('Owner onboarding - screening tenant.', () => {
  it('Welcome screen and select screening tenant option', () => {
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
    onBoarding.screeningOption();
    onBoarding.continueBtn();
    onBoardingPropertyPage.addressInput().type(data.address);
    onBoardingPropertyPage.cityInput().type(data.city);
    onBoardingPropertyPage.stateInput().select(data.state);
    onBoardingPropertyPage.zipInput().type(data.zip);
    onBoardingPropertyPage.bedroomInput().type(data.bedroom);
    onBoardingPropertyPage.bathroomInput().type(data.bathroom);
    onBoardingPropertyPage.rentInput().type(data.rent);
    onBoardingPropertyPage.depositInput().type(data.deposit);
    onBoardingPropertyPage.nextBtn();
    screeningpage.getStarted();
    screeningpage.firstNameInput().type(data.firstName);
    screeningpage.lastNameInput().type(data.lastName);
    screeningpage.emailInput().type(data.email);
    cy.get('[name="mailingAddress"]').type(data.address);
    cy.get('[name="mailingCity"]').type(data.city);
    cy.get('[name="mailingState"]').select(data.state);
    cy.get('[name="mailingZip"]').type(data.zip);
    cy.get('[name="owner_telephone"]').type(data.phone);
    screeningpage.requestBtn();
    cy.get('[data-qa="screening-report-requested"]').should('be.visible');
    cy.get('[data-qa="screening-report-requested-button-done"]')
      .should('be.visible')
      .click();
    cy.get('[data-qa="lease-agreement-promotional-page"]').should('be.visible');
  });
});
