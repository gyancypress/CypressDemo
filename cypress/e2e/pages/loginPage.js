class LoginPage {
    visit() {
      cy.visit('/login', { failOnStatusCode: false })
      ; // Navigate to log in page

    }
  
    enterEmail(email) {
      cy.get('input[name="email"]').type(email); // Enter email
    }

    clickLoginButton() {
      cy.get('button[type="submit"]').click(); //Click on Continue button
      
    }
 
    clickLoginWithGoogle() {
        cy.xpath('//*[text()="Log in with Google"][last()]').click(); //Click on Continue button
        cy.wait(5000);
        cy.origin('https://accounts.google.com', () => {
        cy.get('input[type="email"]').type(Cypress.env('gyancypress@gmail.com'));
        cy.get('#identifierNext').click();
        cy.get('input[type="password"]').type(Cypress.env('@Support1'));
        cy.get('#passwordNext').click();
      });
      
    }
    
    clickChooseAccount() {
      cy.xpath('//div[@data-email="gyancypress@gmail.com"]').click(); //Click on choose your account
    }

    verifyBookingPage() {
      cy.xpath('//a[@title="View booking page"]').should('be.visible'); // View your booking page should be visible

    }
    clickNavigatetoLogOut() {
      cy.xpath('//div/span[text()="G"]').click(); //Click on Navigate to logout
    }

    clickLogOut() {
      cy.xpath('//div[text()="Logout"]/span').click(); //Click on Navigate to logout
    }
   
  }
  
  export const loginPage = new LoginPage();