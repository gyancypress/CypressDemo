describe('API Testing with JSONPlaceholder', () => {
    it('should fetch all posts', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
        expect(response.status).to.eq(200);
        // Log the full response to the Cypress Test Runner
      cy.log(JSON.stringify(response));

      // Log the full response to the browser console
      console.log(response);
        expect(response.body).to.have.length(100); // Validate the number of posts
      });
    });
  
    it('should create a new post', () => {
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'gyan',
        body: 'mishra',
        userId: 1,
      }).then((response) => {
        // Log the full response to the Cypress Test Runner
      cy.log(JSON.stringify(response));

      // Log the full response to the browser console
      console.log(response);
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id'); // Validate the new post ID
      });
    });
  });