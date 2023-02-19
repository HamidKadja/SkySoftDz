import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import { SubContainer } from '@/utils/atoms';
import { LanguageSelector } from '@/utils/context';

const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #008bc5;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-image: ${({ rtl, theme }) =>
    rtl
      ? `radial-gradient(
    at bottom left,
    ${theme.colors.primary.first_shade}CC 0%,
    #008bc5 75%
  );`
      : `radial-gradient(
    at bottom right,
    ${theme.colors.primary.first_shade}CC 0%,
    #008bc5 75%
  );`};
`;
const StyledSubContainer = styled(SubContainer)`
  position: relative;

  padding-top: 72.5px;

  & img {
    transform: ${({ InView }) => (InView ? 'scale(1)' : 'scale(0)')};
    transition: transform 0.9s;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column-reverse;
  }
`;
const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 650px;
  padding-bottom: 35%;
`;
const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ rtl }) => (rtl ? 'margin-left: auto' : 'margin-right: auto')};

  color: ${({ theme }) => theme.colors.secondary.main};

  & > h1 {
    text-align: start;
    text-transform: capitalize;

    font-size: 50px;

    transform: ${({ InView, rtl }) =>
      InView
        ? 'translateX(0)'
        : rtl
        ? 'translateX(200%)'
        : 'translateX(-200%)'};
    transition: transform 0.9s;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin: 0;
    align-items: center;

    & > h1 {
      font-size: 35px;
    }
  }
`;
const Nav = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;

  transform: ${({ InView, rtl }) =>
    InView ? 'translateX(0)' : rtl ? 'translateX(-200%)' : 'translateX(200%)'};
  opacity: ${({ InView }) => (InView ? '1' : '0')};
  transition: transform 0.9s, opacity 0.9s;

  & > span {
    text-transform: capitalize;

    font-weight: bolder;
  }
  & > svg {
    margin: 0px 20px;

    color: ${({ theme }) => theme.colors.primary.first_shade};

    ${({ rtl }) => rtl && 'transform:rotate(180deg)'};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: 40px;
  }
`;

function PageHeader({ Title, ImageUrl }) {
  const rtl = LanguageSelector(true);
  const [ref, InView] = ElementHasBeenInView(0.3);

  return (
    <Container>
      <Image
        fill
        src="/Page_Header_bg.webp"
        alt=""
        style={{ objectFit: 'cover' }}
      />
      <Overlay rtl={rtl} />
      <StyledSubContainer ref={ref} InView={InView}>
        <PageTitleContainer rtl={rtl} InView={InView}>
          <h1>{Title}</h1>
          <Nav rtl={rtl} InView={InView}>
            <span>{LanguageSelector('الرئيسية', 'accueil')}</span>
            <FontAwesomeIcon icon={faChevronRight} />
            <span>{Title}</span>
          </Nav>
        </PageTitleContainer>
        <ImageContainer>
          <Image fill src={ImageUrl} alt="" />
        </ImageContainer>
      </StyledSubContainer>
    </Container>
  );
}

export default PageHeader;
