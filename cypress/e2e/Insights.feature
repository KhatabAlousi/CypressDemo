Feature: Insights Validations

  Scenario: White Paper
    Given user on the Makpar App
    When user clicks on the contact us icone
    Then validate page title
    And validate email
    And validate phone

  Scenario: Innovation lab
    Given user on the Makpar App
    When user clicks on the contact us icone
    Then validate page title
    And validate email
    And validate phone
