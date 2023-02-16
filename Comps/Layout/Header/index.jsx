import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

import LanguageSwitch from './Language_Switch';
import Navigator from './nav';

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 100;
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: ${({ theme }) => theme.variables.maxWidth}px;
  margin: auto;
  padding: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex-wrap: wrap;
  }
`;
const StyledLink = styled(Link)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    order: 3;

    margin: auto;
  }
`;
const MenuToggeler = styled(FontAwesomeIcon)`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    order: 1;
    display: block;

    width: 40px;

    color: ${({ theme }) => theme.colors.secondary.main};

    transition: color 0.3s;

    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <SubContainer>
        <MenuToggeler icon={faList} onClick={() => setMenuOpen(!MenuOpen)} />
        <StyledLink href="/">
          <Image width={115} height={48} src="/logo.png" alt="" />
        </StyledLink>
        <Navigator MenuOpen={MenuOpen} />
        <LanguageSwitch />
      </SubContainer>
    </Container>
  );
}

export default Header;
