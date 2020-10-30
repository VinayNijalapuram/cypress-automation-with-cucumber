import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.phptravels.net/"
const username = "user@phptravels.com"
const pass = "demouser"

Given(`I go to the Php travels home page`, () => {
  cy.visit(url);
  cy.wait(2000)
});

// Search for hotel in Chicago (Nov 1st - Nov 5th ) 3 Adults and 1 Child and click Search. Verify `No Results Found` text is displayed. 
Then(`Search for hotel in Chicago 3 Adults and 1 Child and click Search`, () => {
     
    cy.xpath('//*[@id="s2id_autogen16"]/a/span[1]').type("Chicago")
    cy.xpath('//span[@class="select2-match"]').click({force: true})
    cy.get('#checkin').click();
    cy.xpath('//*[@id="datepickers-container"]/div[1]/nav/div[3]').click({force: true})
    cy.xpath('//*[@id="datepickers-container"]/div[1]/div/div/div[2]/div[1]').click({force: true})
    cy.get('#checkout').click();
    cy.xpath('//*[@id="datepickers-container"]/div[2]/div/div/div[2]/div[5]').click({force: true})
    cy.xpath('//*[@id="hotels"]/div/div/form/div/div/div[3]/div/div/div/div/div/div/div[1]/div/div[2]/div/span/button[1]').click({force: true})
    cy.xpath('//*[@id="hotels"]/div/div/form/div/div/div[3]/div/div/div/div/div/div/div[2]/div/div[2]/div/span/button[1]').click({force: true})
    cy.xpath('//*[@id="hotels"]/div/div/form/div/div/div[4]/button').click({force: true})
    cy.get('.product-long-item-wrapper > .text-center').contains('No Results Found')
    
     
});

//Click on `Airport Transport`, `Guest House` and `High to Low` checkboxes and click search

Then(`click on Airport Transport Guest House and High to Low checkboxes and select search`, () => {
    cy.xpath('//span[contains(., "Airport Transport")]').click({force: true})
    cy.xpath('//label[contains(., "Guest House")]').click({force: true})
    cy.xpath('//label[contains(., "High to Low")]').click({force: true})
    cy.xpath('//button[@id="searchform" and contains(., "Search")]').click({force: true})
  });

  //verify those boxes are still checked after clicking search.
  Then(`verify those boxes are still checked after clicking search`, () => {
    cy.xpath('//span[contains(., "Airport Transport")]').should('not.be.checked')
    cy.xpath('//label[contains(., "Guest House")]').should('not.be.checked')
    cy.xpath('//label[contains(., "High to Low")]').should('not.be.checked')
    cy.xpath('//button[@id="searchform" and contains(., "Search")]').should('not.be.checked')
  });


//Click on My Account button and click Login. Login with incorrect credentials and verify the error message.

Then(`click on My Account button and click Login. Login with incorrect credentials and verify the error message`, () => {
    cy.xpath('//*[@id="dropdownCurrency"]/i').click({force: true})
    cy.xpath('//*[@class="dropdown-item active tr" and contains (., "Login")]').click({force: true})
    cy.xpath('//input[@name="username"]').type("Test@gmail.com", {force: true})
    cy.xpath('//input[@name="password"]').type("demouser", {force: true})
    cy.xpath('//button[@class="btn btn-primary btn-lg btn-block loginbtn"]').click({force: true})
    cy.xpath('//*[@class="alert alert-danger"]').contains('Invalid Email or Password')
  });

  //Login with correct credentials and verify the user name

  Then(`Login with correct credentials and verify the user name`, () => {
    cy.xpath('//input[@name="username"]').clear().type(username, {force: true})
    cy.xpath('//input[@name="password"]').clear().type(pass, {force: true})
    cy.xpath('//button[@class="btn btn-primary btn-lg btn-block loginbtn"]').click({force: true})
    cy.get('.text-align-left').contains('Demo User')
    
  });