/// <reference types="cypress" />

import { randomEmail, randomString, generateTestUser, formatDate } from '../../support/utils/helpers';
import { get, post, validateResponse } from '../../support/utils/api-helpers';

describe('Using Utility Functions', () => {
  it('should generate random test data', () => {
    const user = generateTestUser();
    
    cy.log('Generated User:', user);
    expect(user).to.have.property('username');
    expect(user).to.have.property('email');
    expect(user).to.have.property('password');
    expect(user.email).to.include('@');
  });

  it('should use random strings for unique data', () => {
    const uniqueId = randomString(15);
    const email = randomEmail('example.com');
    
    cy.log(`Unique ID: ${uniqueId}`);
    cy.log(`Email: ${email}`);
    
    expect(uniqueId).to.have.length(15);
    expect(email).to.include('@example.com');
  });

  it('should format dates consistently', () => {
    const today = formatDate();
    const customDate = formatDate(new Date('2025-01-01'));
    
    cy.log(`Today: ${today}`);
    cy.log(`Custom Date: ${customDate}`);
    
    expect(today).to.match(/^\d{4}-\d{2}-\d{2}$/);
    expect(customDate).to.eq('2025-01-01');
  });

  it('should make API requests with helpers', () => {
    get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      validateResponse(response, 200, {
        userId: 'number',
        id: 'number',
        title: 'string',
        body: 'string',
      });
    });
  });

  it('should create resources with POST helper', () => {
    const newPost = {
      title: `Test Post ${randomString(5)}`,
      body: 'This is a test post created using utility helpers',
      userId: 1,
    };

    post('https://jsonplaceholder.typicode.com/posts', newPost).then((response) => {
      validateResponse(response, 201);
      expect(response.body.title).to.eq(newPost.title);
    });
  });

  it('should use utilities in page interactions', () => {
    const testUser = {
      username: randomString(8),
      password: `Test${randomString(6)}!123`,
    };

    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type(testUser.username);
    cy.get('#password').type(testUser.password);
    
    cy.log(`Tested with user: ${testUser.username}`);
  });
});

describe('Advanced Utility Usage', () => {
  it('should combine multiple utilities', () => {
    const testData = {
      user: generateTestUser(),
      apiEndpoint: 'https://jsonplaceholder.typicode.com/users',
      timestamp: formatDate(),
      sessionId: randomString(20),
    };

    cy.wrap(testData).as('testData');

    cy.get('@testData').then((data: any) => {
      cy.log('Complete Test Data:', data);
      expect(data.user.email).to.include('@');
      expect(data.timestamp).to.match(/^\d{4}-\d{2}-\d{2}$/);
      expect(data.sessionId).to.have.length(20);
    });
  });
});
