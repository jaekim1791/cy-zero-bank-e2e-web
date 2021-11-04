// Feedback Form and confirmation message

/*
Custom commands: 
		baseUrl
*/

describe("FEEDBACK FORM", () => {
	it("load home page", () => {
		cy.baseUrl();
	});

	it("click navbar Feedback link", () => {
		cy.get("#feedback > div").contains("Feedback").click();
	});

	it("verify landed on Feedback page", () => {
		cy.url().should("include", Cypress.env("url").feedback);
	});

	it("fill in Feedback page form", () => {
		cy.fixture("people").then((person) => {
			const firstAndLastName = person.personId1.firstAndLastName;
			const email = person.personId1.email;
			const subject = person.personId1.subject;
			const comment = person.personId1.comment;

			cy.get("#name")
				.should("have.attr", "placeholder")
				.and("contain", "Your Name");

			cy.get("#name").type(firstAndLastName);

			cy.get("#email")
				.should("have.attr", "placeholder")
				.and("contain", "Your email address");

			cy.get("#email").type(email);

			cy.get("#subject")
				.should("have.attr", "placeholder")
				.and("contain", "Subject");

			cy.get("#subject").type(subject);

			cy.get("#comment")
				.should("have.attr", "placeholder")
				.and("contain", "Type your questions here...");

			cy.get("#comment").type(comment);
		});
	});

	it("click Send Message button", () => {
		cy.get(".btn-signin.btn.btn-primary").click();
	});

	it("verify submitted message displayed", () => {
		cy.get(".offset3.span6").should(
			"have.text",
			"\n        \n            Feedback\n        \n\n            Thank you for your comments, John Doe.\n            They will be reviewed by our Customer Service staff and given the full attention that they deserve.\n    "
		);
	});
});
