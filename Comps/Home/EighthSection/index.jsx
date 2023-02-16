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
  padding-top: 10%;
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

  font-size: 40px;

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

  font-size: 17px;

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
const StyledButton = styled(Button)`
  padding: 10px 20px;

  font-size: 17px;
`;

function EighthSection() {
  const content = (TextContainerInView) => (
    <TextContainer inView={TextContainerInView} rtl={LanguageSelector(true)}>
      <Title>
        {LanguageSelector(
          'نحن نقدم خدمات إصلاح أجهزة الكمبيوتر عالية الجودة',
          'We provide top-notch quality computer repair services '
        )}
      </Title>
      <SubTitle>
        {LanguageSelector(
          'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ولكن على الرغم من ذلك كل شيء كان مؤثراً وأهم من ذلك الرغبة في التغيير. تخطط أولاً للبحث ',
          'Class enim donec tortor malesuada adipiscing molestie. Faucibus tristique dui sollicitudin maximus quisque bibendum. Convallis ad sollicitudin adipiscing vel volutpat integer.'
        )}
      </SubTitle>
      <StyledButton>
        {LanguageSelector('إكتشف أكثر', 'Discover more')}
      </StyledButton>
    </TextContainer>
  );

  return (
    <SectionWithBackgroundAndOverlay
      Content={content}
      backgroundUrl="/professional-repairman-bending-over-broken-smartphone-and-fixing-tiny-details.webp"
      OverlayContainerBackgroundImage="linear-gradient(135deg, #008bc5 28%, #3BFBC32B 100%)"
    />
  );
}

export default EighthSection;
