Feature: Home Page Validations

  Scenario: demo
    Given user on the Makpar App
    When Validate Home page title "Makpar: Federal IT Modernization"
    Then Validate What We Do exists "What We Do"
    And Validate innovation lab exists
