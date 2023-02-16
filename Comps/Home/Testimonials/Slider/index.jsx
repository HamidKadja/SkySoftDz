import Carousel from 'nuka-carousel';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import Testimonial from './Testimonial';

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`;

function Slider() {
  const slides2 = useMediaQuery({ query: '(max-width: 1024px)' });
  const slides1 = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Container dir="ltr">
      <Carousel
        animation="zoom"
        wrapAround
        pauseOnHover
        slidesToShow={slides1 ? 1 : slides2 ? 2 : 3}
        autoplay
        withoutControls
        cellAlign="center"
      >
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Carousel>
    </Container>
  );
}

export default Slider;
