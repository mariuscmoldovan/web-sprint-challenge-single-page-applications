describe ('Application tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const Bacon = () => cy.get('.toppings')



    it('Elements showing on page', () => {
        Bacon().should('exist')
    })
    
})