Feature: Insights Validations

  Scenario: White Paper
    Given user on the Makpar App
    When user hovers over Insights clicks on White Papers 
    And Validate Home page title "White Papers — Makpar"
    And user validates Download White paper button exists 
    And user validate read now button exists

  Scenario: Innovation lab
    Given user on the Makpar App
    When user hovers over Insights and clicks on Innovation lab
    And Validate Home page title "Innovation Lab — Makpar"
    And user validates read case study button exists 
    And user validate Finding Big Data Solutions
    And user validate Data-Driven Decision Making
    And user validate Meet the Team
