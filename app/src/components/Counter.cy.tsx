import React from 'react';
import { mount } from 'cypress/react';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import Counter from '../../src/components/Counter';

describe('Counter Component', () => {
    beforeEach(() => {
        // Montamos o componente com o Provider do Redux
        mount(
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    });

    it('exibe o título correto', () => {
        // Verifica se o título está presente
        cy.get('[data-cy=counter-title]').should('contain', 'Contador de Visitas');
    });

    it('exibe o valor inicial como zero', () => {
        // Verifica o valor inicial
        cy.get('[data-cy=counter-value]').should('contain', 'Valor: 0');
    });

    it('incrementa o valor ao clicar no botão de incrementar', () => {
        // Clica no botão de incrementar
        cy.get('[data-cy=increment-button]').click();

        // Verifica se o valor foi incrementado
        cy.get('[data-cy=counter-value]').should('contain', 'Valor: 1');
    });

    it('decrementa o valor ao clicar no botão de decrementar', () => {
        // Primeiro incrementamos o valor para 1
        cy.get('[data-cy=increment-button]').click();

        // Depois clicamos em decrementar
        cy.get('[data-cy=decrement-button]').click();

        // Verificamos se o valor voltou a 0
        cy.get('[data-cy=counter-value]').should('contain', 'Valor: 0');
    });
});