/* eslint-disable cypress/no-async-tests */
const fixtureUtils = require('../../utils/fixture-utils');
import ownserSettingPage from '../../pom/owner/owner_setting_page';
const fixturesData = require('../../fixtures/account_settings_fixture');
import loginPage from '../../pom/owner/owner_login_page';
import data from '../../fixtures/ownerDetails.json';
import VISA_CARD_DATA from '../../fixtures/cardInformation.json';
let ownerFixtures, owner;
describe('Owner Settings Page', () => {
  const owner_Setting_Page = new ownserSettingPage();
  before(async () => {
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data(),
    );
    ownerFixtures = serverResponse.data;
    console.log(ownerFixtures['confirmed_owner']);
    owner = serverResponse.data['owner1'];
  });
  beforeEach(() => {
    const login_Page = new loginPage();
    cy.visit(Cypress.env('TEST_OWNER_URL') + '/auth/login');
    cy.ownerLogout();
    login_Page.emailInput().type(owner.rawData['email']);
    login_Page.passwordInput().type(owner.rawData['password']);
    login_Page.submitBtn().click();
  });
  context('Owner_Account_Settings', () => {
    it('Edit data without email', () => {
      owner_Setting_Page.accountsNav().click();
      owner_Setting_Page.settingsNav().click();
      owner_Setting_Page.firstNameInput().clear().type(data.firstName);
      owner_Setting_Page.phoneInput().clear().type(data.telephone);
      owner_Setting_Page.streetAddressInput().clear().type(data.address);
      owner_Setting_Page.cityInput().clear().type(data.city);
      owner_Setting_Page.stateInput().select(data.state);
      owner_Setting_Page.zipInput().clear().type(data.zip);
      owner_Setting_Page.saveBtn().click();
      owner_Setting_Page.firstNameInput().should('have.value', data.firstName);
      owner_Setting_Page
        .streetAddressInput()
        .should('have.value', data.address);
      owner_Setting_Page.cityInput().should('have.value', data.city);
      owner_Setting_Page.zipInput().should('have.value', data.zip);
    });

    it('Edit owner email', () => {
      const random = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
      owner_Setting_Page.accountsNav().click();
      owner_Setting_Page.settingsNav().click();
      owner_Setting_Page
        .emailInput()
        .clear()
        .type(`test+newmail${random}@turbotenant.com`);
      owner_Setting_Page.streetAddressInput().clear().type(data.address);
      owner_Setting_Page.cityInput().clear().type(data.city);
      owner_Setting_Page.stateInput().select(data.state);
      owner_Setting_Page.zipInput().clear().type(data.zip);
      owner_Setting_Page.saveBtn().click();
      owner_Setting_Page
        .passwordInput()
        .should('be.visible')
        .type(owner.rawData['password']);
      owner_Setting_Page.continueBtn().click();
      owner_Setting_Page.notificationBtn().click();
    });
    it('Change password', () => {
      owner_Setting_Page.accountsNav().click();
      owner_Setting_Page.settingsNav().click();
      owner_Setting_Page.changePasswordBtn().click();
      owner_Setting_Page.currentPasswordInput().type(owner.rawData['password']);
      owner_Setting_Page.newPasswordInput().type(owner.rawData['password']);
      owner_Setting_Page.passwordConfirmInput().type(owner.rawData['password']);
      owner_Setting_Page.confirmPasswordBtn().click();
      owner_Setting_Page.continue2Btn().click();
    });
  });
  context('Owner_Billing_Settings', () => {
    it('Change password', () => {
      owner_Setting_Page.accountsNav().click();
      owner_Setting_Page.settingsNav().click();
      owner_Setting_Page.billingTab().click();
      owner_Setting_Page.addCardBtn().click();
      owner_Setting_Page.cardNumberInput().type(VISA_CARD_DATA.number);
      owner_Setting_Page.expDateInput().type(VISA_CARD_DATA.expiration);
      owner_Setting_Page.cvcInput().type(VISA_CARD_DATA.cvc);
      owner_Setting_Page.zipCodeInput().type(VISA_CARD_DATA.zip);
      owner_Setting_Page.saveCard();
    });
  });
});
