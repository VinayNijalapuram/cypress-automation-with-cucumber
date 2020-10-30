@feature-tag
Feature: The PHP Travels

  I want to open a Php travel page and book 


  Scenario: Opening a Php travel page
    Given I go to the Php travels home page
    Then Search for hotel in Chicago 3 Adults and 1 Child and click Search
    Then click on Airport Transport Guest House and High to Low checkboxes and select search
    Then verify those boxes are still checked after clicking search
    Then click on My Account button and click Login. Login with incorrect credentials and verify the error message
    Then Login with correct credentials and verify the user name