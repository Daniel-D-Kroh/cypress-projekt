describe('Example Website Tests', () => {

    beforeEach(() => {
        cy.visit('https://www.example.com');
    });

    it('should have the correct title', () => {
        cy.title().should('eq', 'Example Domain');
    });

    it('should display the main heading text', () => {
        cy.get('h1').should('contain', 'Example Domain');
    });

    it('should show correct paragraph text', () => {
        cy.get('p').first().should('contain', 'This domain is for use in illustrative examples');
    });

    it('should have a link to IANA and it should be visible', () => {
        cy.get('a[href="https://www.iana.org/domains/example"]')
            .should('be.visible')
            .and('have.text', 'More information...');
    });

    it('should have exactly two paragraphs', () => {
        cy.get('p').should('have.length', 2);
    });

    it('should have the correct character encoding meta tag', () => {
        cy.get('meta[charset]')
            .should('have.attr', 'charset', 'utf-8');
    });

    it('should have a viewport meta tag', () => {
        cy.get('meta[name="viewport"]').should('exist');
    });

});