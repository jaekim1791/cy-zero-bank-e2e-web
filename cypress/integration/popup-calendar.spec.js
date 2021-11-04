// Popup calendar date selection

/*
Custom commands: 
		baseUrl
		logIn
		logOut
*/

// urls located in cypress.env.json

describe("POPUP CALENDAR", () => {
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

	it("click Pay Bills tab", () => {
		cy.get("#pay_bills_tab > a").contains("Pay Bills").click();
		cy.url().should("include", Cypress.env("url").loggedIn.payBills);
	});

	it("click Date field", () => {
		cy.get("#sp_date").click();
	});

	it("click a date from the popup calendar", () => {
		cy.get(".ui-state-default").contains("18").click();
	});

	it("log out", () => {
		cy.logOut();
	});
});
