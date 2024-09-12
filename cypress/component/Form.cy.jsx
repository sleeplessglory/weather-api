import Form from '../../src/Form.jsx';
import '../../src/scss/style.css';
describe('Form.cy.jsx', () => {
    beforeEach(() => {
        cy.get('form').should('not.exist')
        cy.mount(<Form />) //mounts
        cy.viewport(900, 660) //dev preference at the moment
    })
    it('fundamentals', () => {
        cy.get('form').should('exist')
        cy.get('form').within(() => {
            cy.get('input').should('have.attr', 'placeholder', 'Enter city')
            cy.get('button').should('have.text', 'Get weather')
        })
    })
    //<Form /> has a child <Weather />, hence, they mount all together
    it('void request', () => {
        cy.get('form').within(() => {
            cy.get('input').type(" ")
            cy.get('button').click()
        })
        cy.get('[data-test="error"]').should('have.text', 'Please, enter a city!')
    })
})