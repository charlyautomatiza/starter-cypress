/// <reference types="cypress" />

describe('The Internet Guinea Pig Website', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    beforeEach(() => {
        cy.fixture('userData.json').as('userData');
        cy.fixture('userBadData.json').as('userBadData');
    });

    /**
     * Sample Test for the login page
     */
    it('Login with valid credentials', function () {
        cy.get('#username')
            .should('have.value', '')
            .type('tomsmith')
            .should('have.value', 'tomsmith');
        cy.get('#password')
            .should('have.value', '')
            .type('SuperSecretPassword!');
        cy.get('[type="submit"]')
            .click();
        cy.get('#flash')
            .should('contain', 'You logged into a secure area!');
    });

    /**
     * Sample Test using a fixture data file
     */
    it('Login with valid credentials - data fixture example', function () {
        cy.get('#username')
            .type(this.userData.username)
            .should('have.value', 'tomsmith');
        cy.get('#password')
            .type(this.userData.password);
        cy.get('[type="submit"]').click();
        cy.get('#flash')
            .should('contain', this.userData.message);
    });

    /**
     * Sample Test using a custom command and a fixture data file
     * for Data Driven Testing example
    */
    it('Login with invalid credentials - DDT Example', function () {
        this.userBadData.forEach(user => {
            cy.login(user);
            cy.get('#flash')
            .should('contain', 'Your username is invalid!');
        });
    });
});
