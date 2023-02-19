import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
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

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 30px;
`;
const ThisCard = styled(Card)`
  width: calc(25% - 20px);

  text-align: center;

  opacity: ${({ CardsInView }) => (CardsInView ? '1' : '0')};
  transition: box-shadow 0.3s, opacity 0.9s ${({ delay }) => delay};

  &:hover {
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.2);
  }
  & > svg {
    color: ${({ theme }) => theme.colors.primary.main};

    height: 50px;
  }
  & > h4 {
    padding-top: 20px;
    padding-bottom: 5px;

    font-size: 25px;
  }
  & > p {
    padding-bottom: 20px;

    text-align: center;

    color: ${({ theme }) => theme.colors.tertiary.second_shade};
    font-size: 15px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: calc(50% - 20px);
    padding: 5px;

    & > h4 {
      padding-top: 20px;

      font-size: 20px;
    }
  }
`;
const ImageContainer = styled.div`
  position: relative;

  width: 100%;

  aspect-ratio: 1;
`;
const ScocialsContainer = styled.div`
  display: flex;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    aspect-ratio: 1;
    margin: 0 5px;

    background-color: ${({ theme }) => theme.colors.primary.first_shade};

    transition: all 0.6s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary.main};

      color: ${({ theme }) => theme.colors.secondary.main};

      transform: scale(1.2);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-top: auto;
    padding-bottom: 20px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxSmall}px) {
    & > a {
      width: 30px;
      height: 30px;
    }
  }
`;

function Team() {
  const [ref, InView] = ElementHasBeenInView(0.2);
  const { route } = useRouter();

  return (
    <Container>
      <StyledSubContianer ref={ref}>
        <SectionTitle>
          {LanguageSelector('التق بفريقنا', 'Meet our team')}
        </SectionTitle>
        <Subtitle>
          {LanguageSelector(
            'العمل الجماعي يجعل الحلم',
            'Teamwork makes the dream work'
          )}
        </Subtitle>
        <CardsContainer>
          <ThisCard CardsInView={InView} delay="0.35s">
            <ImageContainer>
              <Image
                fill
                src="/img__0007.webp"
                sizes="(max-width: 767px) 50vw,25vw"
              />
            </ImageContainer>
            <h4>{LanguageSelector('حاسوب محمول', 'Louie Anderson')}</h4>
            <p>{LanguageSelector('Founder', 'Founder')}</p>
            <ScocialsContainer>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </ScocialsContainer>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s">
            <ImageContainer>
              <Image
                fill
                src="/img__0001.webp"
                sizes="(max-width: 767px) 50vw,25vw"
              />
            </ImageContainer>
            <h4>{LanguageSelector('حاسوب محمول', 'Lucy Young')}</h4>
            <p>{LanguageSelector('Founder', 'Manager')}</p>
            <ScocialsContainer>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </ScocialsContainer>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s">
            <ImageContainer>
              <Image
                fill
                src="/img__0004.webp"
                sizes="(max-width: 767px) 50vw,25vw"
              />
            </ImageContainer>
            <h4>{LanguageSelector('حاسوب محمول', 'Patrick Taylor')}</h4>
            <p>{LanguageSelector('Founder', 'Co-Founder')}</p>
            <ScocialsContainer>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </ScocialsContainer>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s">
            <ImageContainer>
              <Image
                fill
                src="/img__0006.webp"
                sizes="(max-width: 767px) 50vw,25vw"
              />
            </ImageContainer>
            <h4>{LanguageSelector('حاسوب محمول', 'Lilly Lloyd')}</h4>
            <p>{LanguageSelector('Founder', 'Marketing')}</p>
            <ScocialsContainer>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a href={`${route}#`}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </ScocialsContainer>
          </ThisCard>
        </CardsContainer>
      </StyledSubContianer>
    </Container>
  );
}

export default Team;
