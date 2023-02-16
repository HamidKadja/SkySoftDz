import { faCertificate } from '@fortawesome/free-solid-svg-icons/faCertificate';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { memo } from 'react';
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

const StyledSubContainer = styled(SubContainer)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  ${({ rtl }) => (rtl ? 'padding-left:20px' : 'padding-right:20px')};

  opacity: ${({ InView }) => (InView ? '1' : '0')};
  transition: opacity 2s;

  & > p {
    padding: ${({ rtl }) =>
      rtl ? '10px 0px 50px 15px' : '10px 15px 50px 0px'};

    color: ${({ theme }) => theme.colors.tertiary.second_shade};
    font-size: 16.5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 100%;
  }
`;
const RatingContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  transform: ${({ rtl, InView }) =>
    InView ? 'translateX(0)' : rtl ? 'translateX(-200%)' : 'translateX(200%)'};
  transition: transform 0.9s;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 100%;
    margin: 40px 0px;
  }
`;
const ImageContainer = styled.div`
  position: relative;

  width: 50vw;
  height: 100%;
  border-radius: ${({ rtl }) =>
    rtl ? '0px 20px 20px 0px' : '20px 0px 0px 20px'};

  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 100%;
    padding-bottom: 40%;
    border-radius: 20px;
  }
`;
const StyledSubtitle = styled(Subtitle)`
  text-align: start;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxSmall}px) {
    font-size: 25px;
  }
`;
const StyledCard = styled(Card)`
  flex-direction: row;

  margin: 10px 0px;

  transform: ${({ rtl, InView }) =>
    InView ? 'translateX(0)' : rtl ? 'translateX(100%)' : 'translateX(-100%)'};

  transition: box-shadow 0.3s, opacity 0.9s ${({ delay }) => delay},
    transform 0.9s ${({ delay }) => delay};

  opacity: ${({ InView }) => (InView ? 1 : 0)};

  &:hover {
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.2);
  }

  & > svg {
    align-self: start;

    height: 40px;

    color: ${({ theme }) => theme.colors.primary.main};
  }

  & > div {
    padding: 0px 20px;

    & > h4 {
      margin-bottom: 10px;

      font-size: 25px;
    }
    & > p {
      color: ${({ theme }) => theme.colors.tertiary.second_shade};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxSmall}px) {
    & > svg {
      height: 20px;
    }
    & > div {
      & > h4 {
        font-size: 20px;
      }
      & > p {
        font-size: 15px;
      }
    }
  }
`;

function WhyChooseUs() {
  const [ref, InView] = ElementHasBeenInView(0.3);
  const rtl = LanguageSelector(true);

  return (
    <Container>
      <StyledSubContainer ref={ref}>
        <TextContainer InView={InView} rtl={rtl}>
          <SectionTitle>
            {LanguageSelector('لماذا تختارنا', 'Why choose us')}
          </SectionTitle>

          <StyledSubtitle>
            {LanguageSelector(
              'نقوم بإصلاح أجهزة الكمبيوتر المحمولة وأجهزة الكمبيوتر المكتبية لجميع العلامات التجارية الكبرى.',
              'We repair laptops and desktops for all major brands.'
            )}
          </StyledSubtitle>

          <p>
            {LanguageSelector(
              'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
            )}
          </p>

          <StyledCard InView={InView} delay="0.3s" rtl={rtl}>
            <FontAwesomeIcon icon={faCertificate} />
            <div>
              <h4>{LanguageSelector('تقني معتمد', 'Certified Technician')}</h4>
              <p>
                {LanguageSelector(
                  'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ولكن على الرغم من ذلك كل شيء كان مؤثراً وأهم من ذلك الرغبة في التغيير. تخطط أولاً للبحث ',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                )}
              </p>
            </div>
          </StyledCard>

          <StyledCard InView={InView} delay="0.6s" rtl={rtl}>
            <FontAwesomeIcon icon={faPrint} />
            <div>
              <h4>
                {LanguageSelector('قطع الغيار الأصلية', 'Original Spareparts')}
              </h4>
              <p>
                {LanguageSelector(
                  'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ولكن على الرغم من ذلك كل شيء كان مؤثراً وأهم من ذلك الرغبة في التغيير. تخطط أولاً للبحث ',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                )}
              </p>
            </div>
          </StyledCard>

          <StyledCard InView={InView} delay="0.9s" rtl={rtl}>
            <FontAwesomeIcon icon={faComments} />
            <div>
              <h4>
                {LanguageSelector('استشارات مجانية', 'Free Consultations')}
              </h4>
              <p>
                {LanguageSelector(
                  'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ولكن على الرغم من ذلك كل شيء كان مؤثراً وأهم من ذلك الرغبة في التغيير. تخطط أولاً للبحث ',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                )}
              </p>
            </div>
          </StyledCard>
        </TextContainer>

        <RatingContainer rtl={rtl} InView={InView}>
          <ImageContainer rtl={rtl}>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src="/two-young-successful-technicians-in-gloves-and-uniform-working-by-desk.webp"
              alt="two-young-successful-technicians-in-gloves-and-uniform-working-by-desk"
              sizes="(max-width: 1024px) 100vw,50vw"
            />
          </ImageContainer>
        </RatingContainer>
      </StyledSubContainer>
    </Container>
  );
}

export default memo(WhyChooseUs);
