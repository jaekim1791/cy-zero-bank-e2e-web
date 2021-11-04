// Checking if there are transactions

/*
Custom commands: 
		baseUrl
		logIn
		logOut
*/

// urls located in cypress.env.json

describe("TRANSACTIONS", () => {
	Cypress.Cookies.debug(true, { verbose: false });

	beforeEach(() => {
		// Site deletes cookie after signed in
		Cypress.Cookies.preserveOnce("JSESSIONID");
	});

	it("load home page", () => {
		cy.baseUrl();
	});

	it("click Signin button", () => {
		cy.get("#signin_button").click();
	});

	it("sign in", () => {
		cy.logIn();
	});

	it("click Account Activity tab", () => {
		cy.get("#account_activity_tab > a").contains("Account Activity").click();
		cy.url().should("include", Cypress.env("url").loggedIn.accountActivity);
	});

	it("check there are transactions", () => {
		cy.get("tbody > tr").its("length").should("be.gt", 0);
	});

	it("log out", () => {
		cy.logOut();
	});
});
