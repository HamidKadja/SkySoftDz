import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import Slider from './Slider';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import { Container, SectionTitle, SubContainer, Subtitle } from '@/utils/atoms';
import { LanguageSelector } from '@/utils/context';

const StyledSubContianer = styled(SubContainer)`
  flex-direction: column;

  padding-top: 80px;

  transition: opacity 0.9s;
  opacity: ${({ InView }) => (InView ? 1 : 0)};
  & > svg {
    height: 40px;

    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

function Testimonials() {
  const [ref, InView] = ElementHasBeenInView(0.3);

  return (
    <Container>
      <StyledSubContianer ref={ref} InView={InView}>
        <FontAwesomeIcon icon={faQuoteRight} />

        <SectionTitle>{LanguageSelector('توصية', 'Testimonial')}</SectionTitle>

        <Subtitle>{LanguageSelector('ماذا يقولون', 'What they say')}</Subtitle>

        <Slider />
      </StyledSubContianer>
    </Container>
  );
}

export default Testimonials;
