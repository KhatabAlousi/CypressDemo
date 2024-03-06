
const elments = require('../../pages/page_elements/PageElements.json')


class actions{

        static validateText (locator, str){
             
            cy.get(locator).should('have.text', str)
           
            
        }

        static ValidatePageTitle (str){
            cy.title().should('eq', str)
        }

        static navigateToUrl(url){
            cy.visit(url)
        }
  

    }

export default actions






