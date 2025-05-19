// cypress/e2e/navigation.cy.ts
describe("Navegação", () => {
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.visit("http://localhost:3000");
  });

  it("navega para a página de contato", () => {
    // Clica no link de navegação para contato
    cy.get("[data-cy=nav-contact]").click();

    // Verifica se estamos na página correta
    cy.url().should("include", "/contact");
    cy.get("[data-cy=contact-title]").should("be.visible");
  });

  it("navega para a página inicial a partir de contato", () => {
    // Vai para a página de contato
    cy.visit("http://localhost:3000/contact");

    // Volta para a página inicial
    cy.get("[data-cy=nav-home]").click();

    // Verifica se voltamos para a página inicial
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("[data-cy=home-title]").should("be.visible");
  });
});
