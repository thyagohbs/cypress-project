# Testes com Cypress em Projetos Next.js

Este projeto foi criado com [Next.js](https://nextjs.org) e pronto para praticar testes automatizados com o [Cypress](https://www.cypress.io/).

## Diferença entre Jest e Cypress

| Jest                                             | Cypress                                                |
| ------------------------------------------------ | ------------------------------------------------------ |
| Testa funções e componentes isolados (unitários) | Testa a aplicação rodando no navegador (E2E/integrado) |
| Roda no Node.js (terminal)                       | Roda no navegador real                                 |
| Simula o DOM (jsdom)                             | Usa o DOM real                                         |
| Ideal para lógica e pequenos blocos              | Ideal para fluxos completos e interações               |

**Resumo:**

- Use **Jest** para testar funções e componentes isolados.
- Use **Cypress** para testar a experiência do usuário e fluxos completos.

## Como executar os testes Cypress

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Em outro terminal, abra o Cypress:

   ```bash
   npm run cypress
   ```

   Isso abrirá a interface visual do Cypress, onde você pode escolher e rodar os testes.

4. Para rodar os testes em modo headless (sem interface):
   ```bash
   npm run cypress:headless
   ```

## Interpretando os resultados

- **Verde:** Teste passou com sucesso.
- **Vermelho:** Teste falhou. O Cypress mostra exatamente onde e por quê.
- **Time Travel:** Você pode clicar em cada comando do teste para ver o estado da tela naquele momento.
- **Screenshots/Vídeos:** Cypress salva imagens e vídeos dos testes em caso de falha (modo headless).

## Dicas para depuração

- Use `cy.debug()` para pausar o teste e inspecionar o DOM.
- Use `cy.pause()` para pausar a execução e avançar manualmente.
- Leia atentamente o log do Cypress na interface: ele mostra cada ação e resposta.
- Prefira seletores estáveis, como `data-cy`, para evitar que mudanças no layout quebrem seus testes.

## Exemplo de teste Cypress

```js
describe("Contador", () => {
  it("incrementa e decrementa corretamente", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=counter-value]").should("contain", "Valor: 1");
    cy.get("[data-cy=decrement-button]").click();
    cy.get("[data-cy=counter-value]").should("contain", "Valor: 0");
  });
});
```

## Recursos úteis

- [Documentação Cypress](https://docs.cypress.io/)
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Jest](https://jestjs.io/)

---

Bons estudos e bons testes! 🚀
