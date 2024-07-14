Feature: User Login

    Scenario: Successful login with Valid credentials
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        Then the user should be rediected to the home page