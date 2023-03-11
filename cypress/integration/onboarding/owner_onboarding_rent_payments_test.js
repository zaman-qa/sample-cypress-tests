const Utils = require('../../utils/cypress-utils');
import onboarding from '../../pom/onboarding/OnboardingPage';
import onboarding_property_page from '../../pom/onboarding/onBoardingPropertyPage';
import rent_payment_page from '../../pom/onboarding/RentPayment';
import data from '../../fixtures/onboarding.json';
const onBoarding = new onboarding();
const onBoardingPropertyPage = new onboarding_property_page();
const rentPaymentPage = new rent_payment_page();
describe('Owner onboarding - rent payments.', () => {
  it('Welcome screen and select rent payments option', () => {
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
    onBoarding.rentPaymentOption();
    onBoarding.continueBtn();
    onBoarding.letsGetStartedBtn();
    onBoardingPropertyPage.addressInput().type(data.address);
    onBoardingPropertyPage.cityInput().type(data.city);
    onBoardingPropertyPage.stateInput().select(data.state);
    onBoardingPropertyPage.zipInput().type(data.zip);
    rentPaymentPage.continueBtn();
    rentPaymentPage.addTenant();
    rentPaymentPage.addPayment();
    rentPaymentPage.autoPayment();
    rentPaymentPage.continueBtn();
    rentPaymentPage.addMonthlyCharge();
    rentPaymentPage.addOneTimeCharge();
    rentPaymentPage.nextBtn();
    rentPaymentPage.setupStripeIndividualAccount();
    rentPaymentPage.bankMethod();
    rentPaymentPage.setupPlaidBankAccount();
  });
});
