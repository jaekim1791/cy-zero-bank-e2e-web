// Verify user is able to send Forgot Password submission and get confirmaton message.

/*
Custom commands: 
		baseUrl
*/

describe("FORGOT PASSWORD", () => {
	it("load home page", () => {
		cy.baseUrl();
	});

	it("click signin button", () => {
		cy.get("#signin_button").click();
	});

	it("fill in forgot email, send, verify message", () => {
		cy.fixture("people").then((person) => {
			const email = person.personId1.email;

			cy.get(".offset3.span6 > a").click(); // click forgot email link
			cy.get("#user_email").type(email);
			cy.contains("Send Password").click();
			cy.get(".offset3.span6").contains(
				"Your password will be sent to the following email: john.doe@zerobank.com"
			);
		});
	});
});
