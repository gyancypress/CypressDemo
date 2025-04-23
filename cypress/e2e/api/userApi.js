class UserApi {
createUser(userData) {
    return cy.request({
      method: 'POST',
      url: '/users', // Replace with your API endpoint
      headers: {
        'Content-Type': 'application/json',
      },
      body: userData,
    });
  }

  getUser(userId) {
    return cy.request({
      method: 'GET',
      url: `/users/${userId}`, // Replace with your API endpoint
    });
  }

  deleteUser(userId) {
    return cy.request({
      method: 'DELETE',
      url: `/users/${userId}`, // Replace with your API endpoint
    });
  }
}

export const userApi = new UserApi();