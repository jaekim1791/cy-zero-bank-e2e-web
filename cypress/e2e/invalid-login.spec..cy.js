// Verify Invalid login message appears.

/*
Custom commands: 
		baseUrl
		logIn
		logOut
*/

// All urls located in cypress.env.json

describe("INVALID LOGIN", () => {
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

	it("invalid username and password", () => {
		cy.fixture("people").then((user) => {
			const username = user.loginId1.invalidUsername;
			const password = user.loginId1.invalidPassword;

			cy.get("#user_login").type(username);
			cy.get("#user_password").type(password);
		});
	});

	it("check Keep me signed in checkbox", () => {
		cy.get("#user_remember_me").check();
	});

	it("click Sign in button", () => {
		cy.get(".btn.btn-primary").click();
	});

	it("verify invalid Login message", () => {
		cy.get(".alert").contains("Login and/or password are wrong.");
	});
});
