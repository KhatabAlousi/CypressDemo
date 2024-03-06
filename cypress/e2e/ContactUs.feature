Feature: Contact Us Page Validations

  Scenario: demo
    Given user on the Makpar App
    When user clicks on the contact us icone
    Then validate page title
    And validate email
    And validate phone
