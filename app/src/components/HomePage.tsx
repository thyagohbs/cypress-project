'use client';

import Header from './Header';
import Counter from './Counter';

export function HomePage() {
    return (
        <div>
            <Header />

            <main className="main-container">
                <section className="section">
                    <h1 className="section-title" data-cy="home-title">Bem-vindo ao meu portfólio!</h1>
                    <p className="section-description" data-cy="home-description">
                        Sou um desenvolvedor front-end apaixonado por criar interfaces interativas e testáveis.
                    </p>
                </section>

                <Counter />
            </main>
        </div>
    );
}