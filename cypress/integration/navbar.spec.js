// Navbar navigation and links

/*
Custom commands: 
		baseUrl
*/

/*
Required plugins:
	"chai-colors" plugin required to convert HEX to RGB
*/

// urls located in cypress.env.json

const chaiColors = require("chai-colors");
chai.use(chaiColors);

describe("NAVBAR", () => {
	it("load home page", () => {
		cy.baseUrl();
	});

	it("click Online Banking navlink", () => {
		cy.get("#onlineBankingMenu > div").contains("Online Banking").click();
	});

	it("verify landed on Online Banking page", () => {
		cy.url().should("include", Cypress.env("url").onlineBanking);

		cy.get("#onlineBankingMenu > div")
			.should("have.css", "color")
			.and("be.colored", "0098D8");

		cy.get("#onlineBankingMenu > div")
			.should("have.css", "border-top-color")
			.and("be.colored", "0098D8");

		cy.get(".span6").contains("Online Banking");
	});

	it("click Feedback navlink", () => {
		cy.get("#feedback > div").contains("Feedback").click();
	});

	it("verify landed on Feeback page", () => {
		cy.url().should("include", Cypress.env("url").feedback);

		cy.get("#feedback-title").contains("Feedback");
	});
});
