// Test to add new payee in Pay Bills page

/*
Custom commands: 
		baseUrl
		logIn
		logOut
*/

// All urls located in cypress.env.json

describe("ADD NEW PAYEE", () => {
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

	it("click Add New Payee tab", () => {
		cy.get('a[href="#ui-tabs-2"]').click();
	});

	it("add new payee", () => {
		cy.fixture("people").then((personInfo) => {
			const name = personInfo.personId1.firstAndLastName;
			const address = personInfo.personId1.combinedAddress;
			const account = personInfo.personId1.accountNumber;
			const comment = personInfo.personId1.comment;

			cy.get("#np_new_payee_name").type(name);
			cy.get("#np_new_payee_address").type(address);
			cy.get("#np_new_payee_account").type(account);
			cy.get("#np_new_payee_details").type(comment);

			cy.get("#add_new_payee").click();
		});
	});

	it("verify success messege", () => {
		cy.get("#alert_content").contains(
			"The new payee John Doe was successfully created."
		);
	});

	it("log out", () => {
		cy.logOut();
	});
});
