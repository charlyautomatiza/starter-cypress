/// <reference types="cypress" />

describe('Network Interception and Mocking', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
  });

  it('should intercept and spy on network requests', () => {
    // Intercept any GET request
    cy.intercept('GET', '**').as('getRequests');

    cy.visit('https://the-internet.herokuapp.com/login');

    // Wait for the request and verify
    cy.wait('@getRequests').its('response.statusCode').should('eq', 200);
  });

  it('should mock API responses', () => {
    // Mock a specific endpoint
    cy.intercept('GET', '**/api/users', {
      statusCode: 200,
      body: {
        users: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
        ],
      },
    }).as('getUsers');

    // This would trigger the mocked response in a real application
    // cy.visit('/users');
    // cy.wait('@getUsers');
  });

  it('should modify request headers', () => {
    cy.intercept('GET', '**/login', (req) => {
      req.headers['custom-header'] = 'test-value';
      req.continue();
    }).as('loginRequest');

    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should simulate network errors', () => {
    cy.intercept('GET', '**/api/data', {
      statusCode: 500,
      body: {
        error: 'Internal Server Error',
      },
    }).as('serverError');

    // This would trigger the error in a real application
    // cy.visit('/data');
    // cy.wait('@serverError');
  });

  it('should delay responses to test loading states', () => {
    cy.intercept('GET', '**/api/slow', (req) => {
      req.reply({
        statusCode: 200,
        body: { data: 'success' },
        delay: 2000, // 2 second delay
      });
    }).as('slowRequest');

    // This would test loading states in a real application
  });

  it('should stub responses with fixtures', () => {
    cy.intercept('GET', '**/api/users', {
      fixture: 'userData.json',
    }).as('getUsersFromFixture');

    // This would use fixture data in a real application
  });
});

describe('Request/Response Validation', () => {
  it('should validate request payload', () => {
    cy.intercept('POST', '**/api/login', (req) => {
      expect(req.body).to.have.property('username');
      expect(req.body).to.have.property('password');
      req.reply({
        statusCode: 200,
        body: { token: 'fake-token' },
      });
    }).as('loginPost');
  });

  it('should chain multiple intercepts', () => {
    cy.intercept('GET', '**/api/user/1').as('getUser');
    cy.intercept('GET', '**/api/user/1/posts').as('getUserPosts');
    cy.intercept('GET', '**/api/user/1/comments').as('getUserComments');

    // In a real application, these would be triggered
    // cy.wait(['@getUser', '@getUserPosts', '@getUserComments']);
  });
});
