import Image from 'next/image';
import styled from 'styled-components';

import { Card, Container, SubContainer, Subtitle } from '@/utils/atoms';
import { LanguageSelector } from '@/utils/context';

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.secondary.first_shade};
`;
const StyledSubContianer = styled(SubContainer)`
  flex-direction: column;

  padding-top: 50px;
`;

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin-top: 30px;
`;
const StyledCard = styled(Card)`
  width: calc(25% - 20px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: calc(50% - 20px);
  }
`;
const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  padding-bottom: 40%;

  & > img {
    object-fit: contain;
  }
`;

function SupportBrand() {
  return (
    <StyledContainer>
      <StyledSubContianer>
        <Subtitle>
          {LanguageSelector('دعم العلامة التجارية', 'Support brand')}
        </Subtitle>
        <CardsContainer>
          <StyledCard>
            <ImageContainer>
              <Image
                src="/velocity-9.webp"
                fill
                sizes="231px"
                alt="velocity-logo"
              />
            </ImageContainer>
          </StyledCard>

          <StyledCard>
            <ImageContainer>
              <Image
                src="/lighting.webp"
                fill
                sizes="231px"
                alt="lighting-logo"
              />
            </ImageContainer>
          </StyledCard>

          <StyledCard>
            <ImageContainer>
              <Image
                src="/goldline.webp"
                fill
                sizes="231px"
                alt="goldline-logo"
              />
            </ImageContainer>
          </StyledCard>

          <StyledCard>
            <ImageContainer>
              <Image
                src="/fox-hub.webp"
                fill
                sizes="231px"
                alt="fox-hub-logo"
              />
            </ImageContainer>
          </StyledCard>

          <StyledCard>
            <ImageContainer>
              <Image
                src="/earth-2.0.webp"
                fill
                sizes="231px"
                alt="earth-2.0-logo"
              />
            </ImageContainer>
          </StyledCard>

          <StyledCard>
            <ImageContainer>
              <Image
                src="/code-lab.webp"
                fill
                sizes="231px"
                alt="code-lab-logo"
              />
            </ImageContainer>
          </StyledCard>

          <StyledCard>
            <ImageContainer>
              <Image src="/aven.webp" fill sizes="231px" alt="aven-logo" />
            </ImageContainer>
          </StyledCard>

          <StyledCard>
            <ImageContainer>
              <Image
                src="/asgardia.webp"
                fill
                sizes="231px"
                alt="asgardia-logo"
              />
            </ImageContainer>
          </StyledCard>
        </CardsContainer>
      </StyledSubContianer>
    </StyledContainer>
  );
}

export default SupportBrand;
