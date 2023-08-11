// Verify fill in all fields Window alert display.

/*
Custom commands: 
		baseUrl
		logIn
		logOut
*/

// All urls located in cypress.env.json

describe("WINDOW ALERT", () => {
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

	it("click Purchase Foreign Currency tab", () => {
		cy.get('a[href="#ui-tabs-3"]')
			.contains("Purchase Foreign Currency")
			.click();
	});

	it("trigger window alert with message", () => {
		cy.get("#pc_calculate_costs").click();
		cy.on("window:alert", (text) => {
			expect(text).to.eq(
				"Please, ensure that you have filled all the required fields with valid values."
			);
		});
	});

	it("log out", () => {
		cy.logOut();
	});
});
