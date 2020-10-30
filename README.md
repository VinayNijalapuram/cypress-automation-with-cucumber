# cypress-cucumber-example
Initial example of using Cypress with Cucumber.

There are examples that are part of a Continuous Integration build in the main repo, that also showcase more advanced
usage, please refer there as well - https://github.com/VinayNijalapuram/cypress-automation-with-cucumber.git

# Run example tests

```
npm install
npm test
```  

# Tags usage


In order to initialize tests using tags you will have to run cypress and pass TAGS environment variable.

To make things faster and skip cypress opening a browser for every feature file (taking a couple seconds for each one), even the ones we want ignored, we use our own cypress-tags wrapper. It passes all the arguments to cypress, so use it the same way you would use cypress CLI. The only difference is it will first filter out the files we don't care about, based on the tags provided. 

### Examples:

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


    Results:
      Running:  travels/Travels.feature                                                         (1 of 1)


  The PHP Travels
    ✓ Opening a Php travel page (14227ms)


  1 passing (17s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1 
  │
  │ Passing:      1 
  │
  │ Failing:      0 
  │
  │ Pending:      0 
  │
  │ Skipped:      0 
  │
  │ Screenshots:  0 
  │
  │ Video:        true 
  │
  │ Duration:     16 seconds    
  │
  │ Spec Ran:     travels/Travels.feature                                                          │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF 
  
  -  Finished processing: /Users/workspace/cypress-automation/cy     (1 second)
                          press/videos/travels/Travels.feature.mp4                                  


============================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  travels/Travels.feature                  00:16        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
  
    ✔  All specs passed!                        00:16        1        1        -        -        -  





