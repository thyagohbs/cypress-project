// cypress/e2e/contact-form.cy.ts
describe("Formulário de Contato", () => {
  beforeEach(() => {
    // Visita a página de contato
    cy.visit("http://localhost:3000/contact");
  });

  it("exibe mensagem de sucesso ao enviar formulário", () => {
    // Preenche o formulário
    cy.get("[data-cy=name-input]").type("João Silva");
    cy.get("[data-cy=email-input]").type("joao@exemplo.com");
    cy.get("[data-cy=message-input]").type(
      "Olá, gostaria de entrar em contato."
    );

    // Submete o formulário
    cy.get("[data-cy=submit-button]").click();

    // Verifica se a mensagem de sucesso aparece
    cy.get("[data-cy=success-message]")
      .should("be.visible")
      .and("contain", "Mensagem enviada com sucesso!");
  });

  it("exige que todos os campos sejam preenchidos", () => {
    // Tenta submeter o formulário sem preencher nada
    cy.get("[data-cy=submit-button]").click();

    // Verifica se o formulário não foi submetido (HTML5 validation)
    cy.get("[data-cy=success-message]").should("not.exist");
  });
});
