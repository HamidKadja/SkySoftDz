import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { LanguageSelector } from '@/utils/context';

const Container = styled.nav`
  ${({ rtl }) => (rtl ? 'margin-right: auto' : 'margin-left: auto;')};
  & > ul {
    display: flex;
    list-style-type: none;
    & > li {
      margin: 0px 20px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    position: relative;
    order: 4;

    width: 100%;
    max-height: ${({ MenuOpen }) => (MenuOpen ? '400px' : '0px')};
    margin: 0;
    overflow: hidden;

    transition: max-height 0.26s ease;

    & > ul {
      flex-direction: column;

      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.secondary.main};
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${({ active, theme }) =>
    active ? theme.colors.primary.first_shade : theme.colors.secondary.main};
  transition: color 0.5s;
  font-weight: bold;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.first_shade};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: block;

    width: 100%;
    padding: 10px 0px;
  }
`;

function Navigator({ MenuOpen }) {
  const { route } = useRouter();

  return (
    <Container rtl={LanguageSelector(true)} MenuOpen={MenuOpen}>
      <ul>
        <li>
          <StyledLink active={route === '/'} href="/">
            {LanguageSelector('الرئيسية', 'Accueil')}
          </StyledLink>
        </li>
        <li>
          <StyledLink active={route === '/about'} href="/about">
            {LanguageSelector('معلومات عنا', 'à propos de nous')}
          </StyledLink>
        </li>
        <li>
          <StyledLink active={route === '/services'} href="/services">
            {LanguageSelector('خدمات', 'Services')}
          </StyledLink>
        </li>
        <li>
          <StyledLink active={route === '/project'} href="/project">
            {LanguageSelector('المشاريع', 'projets')}
          </StyledLink>
        </li>
        <li>
          <StyledLink active={route === '/contact'} href="/contact">
            {LanguageSelector('اتصل بنا', 'Contactez-nous')}
          </StyledLink>
        </li>
      </ul>
    </Container>
  );
}

export default Navigator;
