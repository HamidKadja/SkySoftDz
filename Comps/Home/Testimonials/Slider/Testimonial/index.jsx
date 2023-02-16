import Image from 'next/image';
import styled from 'styled-components';

import { Card } from '@/utils/atoms';

const StyledCard = styled(Card)`
  width: 100%;
  padding: 75px 35px;

  border: solid 1px ${({ theme }) => theme.colors.tertiary.second_shade}40;

  & > p {
    text-align: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
const Author = styled.div`
  display: flex;

  padding-top: 30px;
`;
const ImageContainer = styled.div`
  position: relative;

  border-radius: 50%;
  overflow: hidden;
`;
const NameContianer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 20px;

  & > span {
    font-weight: 900;
    padding-bottom: 5px;
  }
`;

function Testimonial() {
  return (
    <StyledCard>
      <p>
        Lacus faucibus a massa quis nullam feugiat. Nascetur dolor dapibus
        facilisis luctus feugiat. Ipsum ornare hendrerit porttitor amet
        elementum blandit purus.
      </p>
      <Author>
        <ImageContainer>
          <Image width="50" height="50" src="/Testimonial_1.webp" />
        </ImageContainer>
        <NameContianer>
          <span>Amella Hamilton</span>
          Blogger
        </NameContianer>
      </Author>
    </StyledCard>
  );
}

export default Testimonial;
