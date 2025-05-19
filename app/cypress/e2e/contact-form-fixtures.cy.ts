describe("Formulário de Contato com Fixtures", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact");
    cy.fixture("user").as("userData");
  });

  it("preenche formulário com dados do fixture", function () {
    cy.get("[data-cy=name-input]").type(this.userData.name);
    cy.get("[data-cy=email-input]").type(this.userData.email);
    cy.get("[data-cy=message-input]").type(this.userData.message);
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=success-message]").should("be.visible");
  });
});
