Feature: Search functionality on Zero Bank website

  Scenario: Perform a search for a valid keyword
    Given I am on the Zero Bank homepage
    When I enter "online" in the search field
    And I click the search button
    Then I should see search results related to "online"

  Scenario: Perform a search for an invalid keyword
    Given I am on the Zero Bank homepage
    When I enter "xixixi" in the search field
    And I click the search button
    Then I should see no search results