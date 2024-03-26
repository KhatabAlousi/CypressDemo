
const elments = require('../../pages/page_elements/PageElements.json')


class actions{

        static validateText (locator, str){
             
            cy.get(locator).should('contain', str)
           
            
        }

        static ValidatePageTitle (str){
            cy.title().should('eq', str)
        }

        static navigateToUrl(url){
            cy.visit(url)
        }

        static elementClick (loctor){
            cy.get(loctor).click()
        }

        static hoverOverEmentAndClickOnOption(locator1, locator2){
            cy.get(locator1).trigger('mouseover').click();
            cy.get(locator2).invoke('show').click({ force: true })
        }

        static validateIsVisable (locator){
            cy.get(locator).should('be.visible')
        }
  

    }

export default actions






