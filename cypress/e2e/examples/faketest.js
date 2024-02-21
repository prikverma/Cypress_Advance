/// <reference types ="Cypress" />

// Network request testing
describe("My firstTestsuite", function () {

    it("First API Test Case", function () {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept(
            {
                method: "GET",
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },

            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                }]
            }).as("GetBookOnly")
        cy.get(".btn.btn-primary").click()
        cy.wait("@GetBookOnly")
        cy.get('p').should("have.text", "Oops only 1 Book available")

    })
})


