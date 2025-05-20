# Testando com Cypress em Projetos Next.js

Este projeto foi criado com [Next.js](https://nextjs.org) e está pronto para a pratica de testes automatizados com o [Cypress](https://www.cypress.io/).

## Diferença entre Jest e Cypress

| Jest                                             | Cypress                                                |
| ------------------------------------------------ | ------------------------------------------------------ |
| Testo funções e componentes isolados (unitários) | Testo a aplicação rodando no navegador (E2E/integrado) |
| Rodo no Node.js (terminal)                       | Rodo no navegador real                                 |
| Simulo o DOM (jsdom)                             | Uso o DOM real                                         |
| Ideal para lógica e pequenos blocos              | Ideal para fluxos completos e interações               |

**Resumo:**

- Uso **Jest** para testar funções e componentes isolados.
- Uso **Cypress** para testar a experiência do usuário e fluxos completos.

## Como executo os testes Cypress

1. Instalo as dependências:

   ```bash
   npm install
   ```

2. Rodo o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Em outro terminal, abro o Cypress:

   ```bash
   npm run cypress
   ```

   Isso abrirá a interface visual do Cypress, onde posso escolher e rodar os testes.

4. Para rodar os testes em modo headless (sem interface):
   ```bash
   npm run cypress:headless
   ```

## Como interpreto os resultados

- **Verde:** Teste passou com sucesso.
- **Vermelho:** Teste falhou. O Cypress mostra exatamente onde e por quê.
- **Time Travel:** Posso clicar em cada comando do teste para ver o estado da tela naquele momento.
- **Screenshots/Vídeos:** O Cypress salva imagens e vídeos dos testes em caso de falha (modo headless).

## Minhas dicas para depuração

- Uso `cy.debug()` para pausar o teste e inspecionar o DOM.
- Uso `cy.pause()` para pausar a execução e avançar manualmente.
- Leio atentamente o log do Cypress na interface: ele mostra cada ação e resposta.
- Prefiro seletores estáveis, como `data-cy`, para evitar que mudanças no layout quebrem meus testes.

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
