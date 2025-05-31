describe('My First Test Suite', () => {
    it('My First Test Case', () =>{
        cy.visit("/");
        cy.contains('Hello World');
    });
});