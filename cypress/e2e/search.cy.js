// Verify user is able to search and see results.

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
		cy.get(".top_offset").contains(
			"No results were found for the query: some text"
		);
	});
});
