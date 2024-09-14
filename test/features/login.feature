Feature: Login to My Demo App

@login
@regression
  Scenario Outline: As a user, I can log into the my demo app

    Given My Demo app has loaded
    When I click to expand the hamburger menu
    Then I click the Login Menu item and login with <username> and <password>

    Examples:
      | username          | password      |
      | bob@example.com   | 10203040      |
      #Locked out account
      #| alice@example.com | 10203040      | 
