import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpenText';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import {
  Card,
  Container,
  SectionTitle,
  SubContainer,
  Subtitle,
} from '@/utils/atoms';
import { LanguageSelector } from '@/utils/context';

const StyledSubContianer = styled(SubContainer)`
  flex-direction: column;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  opacity: ${({ InView }) => (InView ? '1' : '0')};
  transform: ${({ InView }) => (InView ? 'translateY(0)' : 'translateY(100%)')};
  transition: box-shadow 0.3s, opacity 0.9s, transform 0.9s;

  & > p {
    max-width: 600px;
    margin-top: 20px;

    text-align: center;

    color: ${({ theme }) => theme.colors.tertiary.second_shade};
  }
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 30px;
`;
const ThisCard = styled(Card)`
  width: calc(33.33% - 20px);

  opacity: ${({ InView }) => (InView ? '1' : '0')};
  transform: ${({ InView }) => (InView ? 'translateY(0)' : 'translateY(100%)')};
  transition: box-shadow 0.3s, opacity 0.9s, transform 0.9s;

  &:hover {
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.2);
  }
  & > svg {
    color: ${({ theme }) => theme.colors.primary.main};

    height: 50px;
  }
  & > h4 {
    padding: 20px 0;

    font-size: 25px;
  }
  & > p {
    text-align: center;

    color: ${({ theme }) => theme.colors.tertiary.second_shade};
    font-size: 15px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
`;
const TransparentCard = styled(ThisCard)`
  background-color: transparent;

  box-shadow: none;

  opacity: ${({ InView }) => (InView ? '1' : '0')};
  transform: ${({ InView, right }) =>
    InView
      ? 'translateX(0)'
      : right
      ? 'translateX(100%)'
      : 'translateX(-100%)'};
  transition: box-shadow 0.3s, opacity 0.9s, transform 0.9s;
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-image: radial-gradient(
      at center center,
      #ffffff80 0%,
      #ffffffde 85%
    );
  }
`;

function GetInTouch() {
  const [ref, InView] = ElementHasBeenInView(0.2);

  return (
    <Container>
      <ImageContainer>
        <Image fill src="/bg_grey.webp" />
      </ImageContainer>
      <StyledSubContianer ref={ref}>
        <TextContainer InView={InView}>
          <SectionTitle>
            {LanguageSelector('ابقى على تواصل', 'Get in touch')}
          </SectionTitle>
          <Subtitle>
            {LanguageSelector(
              'يسعدنا العمل معك!',
              "We'd love to work with you!"
            )}
          </Subtitle>
          <p>
            {LanguageSelector(
              'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ولكن على الرغم من ذلك كل شيء كان مؤثراً وأهم من ذلك الرغبة في التغيير.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
            )}
          </p>
        </TextContainer>
        <CardsContainer>
          <TransparentCard InView={InView}>
            <FontAwesomeIcon icon={faMapLocationDot} />
            <h4>{LanguageSelector('الموقع', 'Location')}</h4>
            <p>
              {LanguageSelector(
                '500 شمال شرق 26 شارع 3 أ ميامي فلوريدا 33137-5201 الولايات المتحدة الأمريكية',
                '500 NE 26TH ST APT 3A MIAMI FL 33137-5201 USA'
              )}
            </p>
          </TransparentCard>
          <ThisCard InView={InView} delay="0.35s">
            <FontAwesomeIcon icon={faPhone} />
            <h4>{LanguageSelector('اتصل بنا', 'Call us')}</h4>
            <p>+6221.2002.2012</p>
            <p>+6221.2002.2013 (Fax)</p>
          </ThisCard>
          <TransparentCard InView={InView} right="true">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <h4>
              {LanguageSelector('ارسل لنا عبر البريد الإلكتروني', ' Email us ')}
            </h4>
            <p>hello@yourdomain.tld</p>
            <p>support@yourdomain.tld </p>
          </TransparentCard>
        </CardsContainer>
      </StyledSubContianer>
    </Container>
  );
}

export default GetInTouch;
