import { loginPage } from '../pages/loginPage';
import { dashboardPage } from '../pages/dashboardPage';

describe('Login Tests', () => {
  it('should log in successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.enterEmail('gyancypress@gmail.com');
    loginPage.clickLoginButton();
    loginPage.clickLoginWithGoogle();
    loginPage.clickChooseAccount();
    loginPage.verifyBookingPage();
    loginPage.clickNavigatetoLogOut();
    loginPage.clickLogOut();
    dashboardPage.verifyLoginLink();
  });

});
