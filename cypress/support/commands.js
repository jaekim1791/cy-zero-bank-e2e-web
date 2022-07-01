// Load baseUrl and verify
Cypress.Commands.add("baseUrl", () => {
	cy.visit("/");

	cy.readFile("cypress.env.json").then((homeUrl) => {
		const url = homeUrl.url.home;
		cy.url().should("include", url);
	});

	cy.get("#homeMenu").contains("Home");
});

// Log in
Cypress.Commands.add("logIn", () => {
	cy.fixture("people").then((users) => {
		const username = users.loginId1.username;
		const password = users.loginId1.password;

		cy.get("#user_login").type(username);
		cy.get("#user_password").type(password);
		cy.get("#user_remember_me").check();
		cy.get(".btn.btn-primary").click();
	});
});

// Log out
Cypress.Commands.add("logOut", () => {
	cy.get(".icon-user").click();
	cy.get("#logout_link").contains("Logout").click();
	cy.url().should("include", Cypress.env("url").home);
	cy.get("#signin_button").contains("Signin").click();
	cy.get(".page-header").contains("Log in to ZeroBank");
});
