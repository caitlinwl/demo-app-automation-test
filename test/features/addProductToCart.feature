Feature: Add Product to Cart

@addproducttocart
  Scenario Outline: As a user, I want to add a product to my cart

    Given My Demo app has loaded
    When I click on the first product in the app catalog
    Then I should be able to view the product
    And I click the add to cart button
    Then I click the shopping cart icon
    And I am able to view the item in my shopping cart