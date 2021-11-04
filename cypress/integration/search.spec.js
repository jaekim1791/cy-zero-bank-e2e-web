// Search box and result

/*
Custom commands: 
		baseUrl
		logIn
		logOut
*/

describe("SEARCH", () => {
	it("load home page", () => {
		cy.baseUrl();
	});

	it("type into serachbox and submit", () => {
		cy.get("#searchTerm").type("some text {enter}");
	});

	it("show search results page", () => {
		cy.get("h2").contains("Search Results");
	});
});
