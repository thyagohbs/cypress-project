// cypress/e2e/counter.cy.ts
describe("Contador na Página Inicial", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("mantém o estado do contador entre navegações", () => {
    // Incrementa o contador duas vezes
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=increment-button]").click();

    // Verifica o valor
    cy.get("[data-cy=counter-value]").should("contain", "Valor: 2");

    // Navega para contato e volta
    cy.get("[data-cy=nav-contact]").click();
    cy.get("[data-cy=nav-home]").click();

    // Verifica se o contador manteve o valor
    cy.get("[data-cy=counter-value]").should("contain", "Valor: 2");
  });
});
