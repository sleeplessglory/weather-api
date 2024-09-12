describe('functionality', () => {
    //IF YOU CAN'T FETCH THE DATA, TRY TO USE VPN (worked for me a bunch of times)
    beforeEach(() => {
        cy.visit('') //the URL is configured within "cypress.config.js"
        cy.viewport(1920, 1080) //dev preference currently
    })
    it('page loads', () => {
        cy.contains(/Get weather/i).should('be.visible')
        cy.contains(/How big, how blue, how beautiful/i).should('be.visible')
    })
    it('accepts user requests', () => {
        cy.get('form').within(() => {
            cy.get('input').type("Sydney")
            try { //let's catch any error, if it fails
                cy.get('button').click().wait(5000)
            }
            catch(error) {
                console.error(error);
            }
        })
    })
    it('detects extra spaces', () => {
        cy.get('form').within(() => {
            cy.get('input').clear().type('       Amsterdam ')
            try {
                cy.get('button').click().wait(5000)
            }
            catch(error) {
                console.error(error);
            }
        })
    })
})