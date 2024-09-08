Feature: About Page

@about
  Scenario Outline: As a user, I can navigate to the about page in my demo app

    Given My Demo app has loaded
    When I click to expand the hamburger menu
    Then I click About in the hamburger menu
    And I should see the About page displayed
    And I see the Saucelabs Website link is visible