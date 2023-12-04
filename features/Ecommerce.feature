Feature: Ecommerce validations
@Regression
    Scenario: Placing the order
        Given a login to the Ecommerce application with 'anshika@gmail.com' and 'Iamking@000'
        When Add 'zara coat 4' to Cart
        Then Verify 'zara coat 3' is displayed in the Cart
        When enter valid details and place the order
        Then Verify order is present in the order history page

@ErrorValiation
    Scenario Outline: Loggin into Ecommerce2 Application
        Given a login to the Ecommerce2 application with "<username>" and '<password>'
        Then Verify Error Message is displayed
        
        Examples:
            | username           | password     | 
            | anshika@gmail.com  | Iamking@000  | 
            |anshika2@gmail.com | Iamqueen@000  |