Feature: Login to Application

    As a valid user
    I wan to Login into Application

    Scenario: Valid Login
    Given I open login page
    When I submit login
    Then I should see homepage