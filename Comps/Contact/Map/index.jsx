import styled from 'styled-components';

import { Container } from '@/utils/atoms';

const StyledContainer = styled(Container)`
  padding: 0px;
  & > iframe {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
function MapSection() {
  return (
    <StyledContainer>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1196.6132026867117!2d3.055352712404308!3d36.75569158103428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sdz!4v1676839595333!5m2!1sen!2sdz"
        width="800"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: 'width: 100%' }}
      />
    </StyledContainer>
  );
}

export default MapSection;
