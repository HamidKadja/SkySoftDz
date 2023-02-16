import styled from 'styled-components';

import SectionWithBackgroundAndOverlay from '@/utils/atoms/SectionWithBackgroundAndOverlay';
import Button from '@/utils/atoms/buttons';
import { LanguageSelector } from '@/utils/context';

const TextContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: ${({ theme }) => theme.variables.maxWidth}px;
  height: fit-content;
  padding: 0px 20px;
  padding-top: 17%;
  padding-bottom: 11%;

  color: ${({ theme }) => theme.colors.secondary.main};

  left: ${({ inView, rtl }) => (inView ? ' 0' : rtl ? '-100vw' : '100vw')};

  transition: left 1s;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding-top: 130px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding-bottom: 72px;
  }
`;
const Title = styled.h1`
  width: 50%;

  font-size: 60px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 40px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;

    font-size: 33px;
  }
`;
const SubTitle = styled.h4`
  width: 50%;
  margin: 20px 0;

  font-size: 23px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxSmall}px) {
    font-size: 17px;
  }
`;

function FristSection() {
  const content = (TextContainerInView) => (
    <TextContainer inView={TextContainerInView} rtl={LanguageSelector(true)}>
      <Title>
        {LanguageSelector(
          'الطريقة الذكية لإصلاح أجهزة الكمبيوتر.',
          'The smart way to fix computers.'
        )}
      </Title>
      <SubTitle>
        {LanguageSelector(
          'خدمات الكمبيوتر هنا للمساعدة في دعم عملك!',
          'Computer Services Is Here To Help Support Your Business!'
        )}
      </SubTitle>
      <Button>{LanguageSelector('إكتشف أكثر', 'Discover more')}</Button>
    </TextContainer>
  );

  return (
    <SectionWithBackgroundAndOverlay
      Content={content}
      backgroundUrl="/man-repairing-laptop-at-workplace-1.webp"
      OverlayContainerBackgroundImage="radial-gradient(at top right, #3bfbc32b 0%, #008bc5 92%)"
    />
  );
}

export default FristSection;
