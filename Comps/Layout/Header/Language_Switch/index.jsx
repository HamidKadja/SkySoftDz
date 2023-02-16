import styled from 'styled-components';

import { useSiteContext } from '@/utils/context';

const Container = styled.div`
  position: relative;
  display: flex;

  padding: 0px;
  border-radius: 7px;

  background-color: ${({ theme }) => theme.colors.primary.main};

  color: ${({ theme }) => theme.colors.tertiary.main};

  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50%;

    border-radius: 7px 0px 0px 7px;

    background-color: ${({ theme }) => theme.colors.primary.first_shade};
  }

  & > span {
    position: relative;
    flex: 0 1 auto;

    width: 35px;

    text-align: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    order: 3;
  }
`;

function LanguageSwitch() {
  const [language, toggleLanguage] = useSiteContext('language');

  return (
    <Container onClick={() => toggleLanguage(language === 'ar' ? 'fr' : 'ar')}>
      <span>عربي</span>
      <span>Fr</span>
    </Container>
  );
}

export default LanguageSwitch;
