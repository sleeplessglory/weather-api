describe('styling', () => {
    beforeEach(() => {
        cy.visit('') //the URL is configured within "cypress.config.js"
        cy.viewport(1920, 1080)
    })
    it('has proper colours and fonts', () => {
        /*Cypress uses an RGB format to compare with. Colours for this project are set 
        in an HSL format. Can be converted or checked in the code. Let's use RGB as input for tests*/
        cy.get('body').should('have.css', 'background-color', 'rgb(219, 243, 255)')
        cy.get('form').within(() => {
            cy.get('input').should('have.css', 'background-color', 'rgb(255, 255, 255)')
            cy.get('button').should('have.css', 'background-color', 'rgb(10, 138, 22)')
                               .and('have.css', 'color', 'rgb(255, 255, 255)')
        })
        cy.get('[data-test="capt"]').should('have.css', 'color', 'rgb(11, 16, 157)')
        cy.get('form').within(() => {
            cy.get('input').type("   ")
            cy.get('button').click()
        })
        cy.get('[data-test="card"]').should('have.css', 'background') //cypress has issues recognising gradient colours
        cy.get('[data-test="error"').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('body').should('have.css', 'font-family', 'Arial, "Segoe UI Emoji", Georgia')
    })
    it('has correct card properties', () => {
        cy.get('form').within(() => {
            cy.get('input').type("   ")
            cy.get('button').click()
        })
        cy.get('[data-test="card"]').should('have.css', 'margin-bottom', '24px') //Cypress uses pixels to compare with (1(r)em = 16px)
                                       .and('have.css', 'padding', '32px')
                                       .and('have.css', 'border-radius', '7px')
                                       .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.5) 4px 4px 5px 0px')
                                       .and('have.css', 'border-radius', '7px')
                                       .and('have.css', 'min-width', '176px')
                                       .and('have.css', 'width', '320px')
                                       .and('have.css', 'display', 'flex')
                                       .and('have.css', 'flex-direction', 'column')
                                       .and('have.css', 'align-items', 'center')
    })
    it('responsive mobile version', () => {
        cy.viewport(400, 800)
        cy.get('form').within(() => {
            cy.get('input').type("Montreal")
            cy.get('button').click()
            cy.get('input').should('have.css', 'font-size', '19.2px')
            cy.get('button').should('have.css', 'font-size', '19.2px')
        })
        cy.get('[data-test="capt"]').should('have.css', 'font-size', '27.2px')       
        cy.get('[data-test="card"]').should('have.css', 'margin', '16px 0px 32px')
                                       .and('have.css', 'min-width', '192px')
                                       .and('have.css', 'width', '224px')
        cy.get('[data-test="city"]').should('have.css', 'font-size', '32px')
        cy.get('[data-test="temp"]').should('have.css', 'font-size', '32px')
        cy.get('[data-test="hum"]').should('have.css', 'font-size', '22.4px')
        cy.get('[data-test="desc"]').should('have.css', 'font-size', '22.4px')
        cy.get('[data-test="emoji"]').should('have.css', 'font-size', '80px')
    })
})