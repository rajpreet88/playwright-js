Feature: Ecommerce2 Error validations
@ErrorValiation
    Scenario Outline: Loggin into Ecommerce2 Application
        Given a login to the Ecommerce2 application with "<username>" and '<password>'
        Then Verify Error Message is displayed
        
        Examples:
            | username           | password     | 
            | anshika@gmail.com  | Iamking@000  | 
            |anshika2@gmail.com | Iamqueen@000  |