/// <reference types="cypress" />

describe('API Testing Examples', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  describe('GET Requests', () => {
    it('should fetch all posts', () => {
      cy.request('GET', `${baseUrl}/posts`).its('status').should('eq', 200);

      cy.request('GET', `${baseUrl}/posts`).its('body').should('have.length', 100);
    });

    it('should fetch a single post', () => {
      cy.request('GET', `${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('userId');
        expect(response.body).to.have.property('title');
        expect(response.body).to.have.property('body');
      });
    });
  });

  describe('POST Requests', () => {
    it('should create a new post', () => {
      const newPost = {
        title: 'Test Post',
        body: 'This is a test post created by Cypress',
        userId: 1,
      };

      cy.request('POST', `${baseUrl}/posts`, newPost).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.title).to.eq(newPost.title);
        expect(response.body.body).to.eq(newPost.body);
        expect(response.body.userId).to.eq(newPost.userId);
      });
    });
  });

  describe('PUT Requests', () => {
    it('should update an existing post', () => {
      const updatedPost = {
        id: 1,
        title: 'Updated Post',
        body: 'This post has been updated',
        userId: 1,
      };

      cy.request('PUT', `${baseUrl}/posts/1`, updatedPost).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq(updatedPost.title);
        expect(response.body.body).to.eq(updatedPost.body);
      });
    });
  });

  describe('DELETE Requests', () => {
    it('should delete a post', () => {
      cy.request('DELETE', `${baseUrl}/posts/1`).its('status').should('eq', 200);
    });
  });

  describe('Error Handling', () => {
    it('should handle 404 errors gracefully', () => {
      cy.request({
        url: `${baseUrl}/posts/999999`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });

  describe('Response Validation', () => {
    it('should validate response headers', () => {
      cy.request('GET', `${baseUrl}/posts/1`)
        .its('headers')
        .its('content-type')
        .should('include', 'application/json');
    });

    it('should validate response time', () => {
      cy.request('GET', `${baseUrl}/posts/1`).its('duration').should('be.lessThan', 5000);
    });
  });
});
