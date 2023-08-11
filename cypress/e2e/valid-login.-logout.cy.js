// Verify if user is able to login and logout

/*
Custom commands: 
		baseUrl
		logIn
		logOut
*/

// All urls located in cypress.env.json

describe("VALID LOGIN", () => {
	it("load home page", () => {
		cy.baseUrl();
	});

	it("click Signin button", () => {
		cy.get("#signin_button").click();
	});

	it("verify landed on Login page", () => {
		cy.url().should("include", Cypress.env("url").signin);
		cy.get(".page-header").contains("Log in to ZeroBank");
	});

	it("valid login and password", () => {
		cy.logIn();
	});

	it("verify logged in username and url", () => {
		cy.get(".dropdown-toggle").contains("username");
		cy.url().should("include", Cypress.env("url").loggedIn.signedin);
	});
});

describe("SIGN OUT", () => {
	it("verify logged out", () => {
		cy.logOut();
	});
});
