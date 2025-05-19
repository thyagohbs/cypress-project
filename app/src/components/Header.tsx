import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-title">Meu Portfólio</div>
                <ul className="header-list">
                    <li><Link href="/" data-cy="nav-home">Home</Link></li>
                    <li><Link href="/contact" data-cy="nav-contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;