import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import actions from "../../pages/page_actions/actions";
//import PageElements from "../../pages/page_elements/PageElements";

const PageElements = require('../../pages/page_elements/PageElements.json');

Given("user on the Makpar App", ()=>{

    actions.navigateToUrl(PageElements.MakparURL)
    
})

When("Validate Home page title {string}",(title)=>{
    //cy.title().should('eq','Makpar: Federal IT Modernization')
    actions.ValidatePageTitle(title)
})

Then('Validate What We Do exists {string}', (actualText)=>{
   // cy.get('#block-63486b591821d79aa44a5635 > .sqs-block-content > .sqs-html-content > :nth-child(2)').should('have.text', 'What We Do')
    
   actions.validateText(PageElements.HomePage.WhatWeDo, actualText)
  
})
Then("Validate innovation lab exists", ()=>{
   // cy.get('#block-c2ee5c2123c88155e591 > .sqs-block-content > .sqs-html-content > h2').should('have.text', 'Makpar Innovation Lab')

    actions.validateText(PageElements.HomePage.MakparInnovationLab, 'Makpar Innovation Lab')
})