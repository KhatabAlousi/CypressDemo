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

When("user clicks on the contact us icone",()=>{

    //cy.get(PageElements.ContactUsPage.ContactUsIcon).click()
    actions.elementClick(PageElements.ContactUsPage.ContactUsIcon)

})

When ("validate email and phone", ()=>{
    actions.validateText(PageElements.ContactUsPage.Email, "info@makpar.com(571) 799-0070")

})

When ("validate phone", ()=>{
    actions.validateText(PageElements.ContactUsPage.Phnoe, "(571) 799-0070")

})

And ("Validate privicy policy",()=>{
    actions.validateText(PageElements.ContactUsPage.privicyPolicy,"Privicy Policy" )
    
})

And ("expand privicy policy",()=>{
    actions.elementClick(PageElements.ContactUsPage.privicyPolicy)

})

And ("validate privicy policly last updated",()=>{
    actions.validateText(PageElements.ContactUsPage.privicyPoliclyLastUpdate,"Last updated: May 02, 2022" )
})

And ("validate Interpretation and Definitions",()=>{
    actions.validateText(PageElements.ContactUsPage.InterpretationAndDefinitions, "Interpretation and Definitions")
})

And ("validate Types of Data Collected",()=>{
    actions.validateText(PageElements.ContactUsPage.TypesOfDataCollected, "Types of Data Collected")


})

And ("validate Necessary / Essential Cookies",()=>{
    actions.validateText(PageElements.ContactUsPage.NecessaryEssentialCookies, "Necessary / Essential Cookies")


})

And ("validate Use of Your Personal Data",()=>{
    actions.validateText(PageElements.ContactUsPage.UseOfYourPersonalData, "Use of Your Personal Data")

})

And ("validate Transfer of Your Personal Data",()=>{
    actions.validateText(PageElements.ContactUsPage.TransferOfYourPersonalData, "Transfer of Your Personal Data")

})

And ("validate Disclosure of Your Personal Data",()=>{
    actions.validateText(PageElements.ContactUsPage.DisclosureOfYourPersonalData, "Disclosure of Your Personal Data")

})

And ("validate Services",()=>{
    actions.validateText(PageElements.ContactUsPage.Services, "Services")

})

And ("validate Certifications",()=>{
    actions.validateText(PageElements.ContactUsPage.Certifications, "Certifications")

})

When ("user hovers over Insights clicks on White Papers",()=>{
    // cy.get(".header-display-desktop > .header-title-nav-wrapper > .header-nav > .header-nav-wrapper > .header-nav-list > :nth-child(5) > .header-nav-folder-title").trigger('mouseover').click();
    // cy.get('body > div:nth-child(1) > header:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(3) > a:nth-child(1) > span:nth-child(1)').invoke('show').click({ force: true })

    actions.hoverOverEmentAndClickOnOption(PageElements.WhitePaperPage.Insights,PageElements.WhitePaperPage.WhitePaper)

})
And ("user validate In Response to The SolarWinds Breach",() =>{
    actions.validateText(PageElements.WhitePaperPage.InResponseToSolarWinds,"In Response to The SolarWinds Breach:" )

})

And ("user validates Download White paper button exists" ,() =>{
    actions.validateIsVisable(PageElements.WhitePaperPage.DownloadWhitPaper)

})

And ("user validate Industry Insight at Your Fingertips",() =>{

    actions.validateText(PageElements.WhitePaperPage.IndustryInsight, "Industry Insight at Your Fingertips")
})

And ("user validate read now button exists",() =>{

    actions.validateIsVisable(PageElements.WhitePaperPage.ReadNow)
})


When ("user hovers over Insights and clicks on Innovation lab",()=>{
    actions.hoverOverEmentAndClickOnOption(PageElements.InnovationLabPage.Insights, PageElements.InnovationLabPage.Innovationab)
})

And ("user validates read case study button exists",() =>{
    actions.validateIsVisable(PageElements.InnovationLabPage.ReadCaseStudy)

})
And ("user validate Finding Big Data Solutions",() =>{
    actions.validateText(PageElements.InnovationLabPage.FiningBigData, "Finding Big Data Solutions")
})
And ("user validate Data-Driven Decision Making",() =>{
    actions.validateText(PageElements.InnovationLabPage.DataDriven,"Data-Driven Decision Making")
})
And ("user validate Meet the Team",() =>{
    actions.validateText(PageElements.InnovationLabPage.MeetTheTeam,"Meet the Team")
})