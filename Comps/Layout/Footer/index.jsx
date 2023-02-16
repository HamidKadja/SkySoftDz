import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { SubContainer } from '@/utils/atoms';
import { LanguageSelector } from '@/utils/context';

const Container = styled.footer`
  display: flex;
  justify-content: center;
`;
const StyledSubContainer = styled(SubContainer)`
  flex-direction: column;
`;
const LogoAndSocialsCOntainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 20px 0px;
  border-bottom: solid 1px
    ${({ theme }) => theme.colors.tertiary.second_shade}60;

  & > div {
    ${({ rtl }) => (rtl ? 'margin-right: auto' : 'margin-left: auto')};

    & > a {
      display: inline-block;

      padding: 20px 10px;
      &:hover {
        & > svg {
          color: ${({ theme }) => theme.colors.primary.first_shade};
          transform: scale(1.5);
        }
      }
      & > svg {
        height: 20px;
      }
    }
  }
`;
const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 20px 0px;

  font-size: 12.5px;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <StyledSubContainer>
        <LogoAndSocialsCOntainer rtl={LanguageSelector(true)}>
          <Image width={115} height={48} src="/Logo_black.webp" alt="" />
          <div>
            <Link href="#__next">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link href="#__next">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="#__next">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="#__next">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </LogoAndSocialsCOntainer>
        <CopyrightContainer>
          {LanguageSelector(
            `جميع حقوق النشر محفوظة SkySoftDz © ${currentYear}. مدعوم من Ra2i3.`,
            `Copyright © ${currentYear} SkysoftDz, All rights reserved. Powered by
          RA2I3.`
          )}
        </CopyrightContainer>
      </StyledSubContainer>
    </Container>
  );
}

export default Footer;
