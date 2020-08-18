import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const selectedRoute = useLocation().pathname;

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={selectedRoute === '/' ? 'selected' : ''}>
            Listagem
          </Link>
          {/* <Link
            to="/register"
            className={selectedRoute === '/' ? 'selected' : ''}
          >
            Cadastrar
          </Link> */}
          <Link
            to="/import"
            className={selectedRoute === '/import' ? 'selected' : ''}
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
