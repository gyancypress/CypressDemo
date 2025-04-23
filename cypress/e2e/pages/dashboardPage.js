class DashboardPage {
  verifyLoginLink() {
    cy.xpath('//*[@data-testid="login-header"][last()]').should('be.visible'); //login link should be visible

  }
  
  }
  
  export const dashboardPage = new DashboardPage();