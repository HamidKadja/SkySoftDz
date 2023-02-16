import Image from 'next/image';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';

const Container = styled.section`
  position: relative;
`;
const OverlayContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  background-image: ${({ OverlayContainerBackgroundImage }) =>
    OverlayContainerBackgroundImage};
`;

function SectionWithBackgroundAndOverlay({
  Content,
  backgroundUrl,
  OverlayContainerBackgroundImage,
}) {
  const [ref, TextContainerInView] = ElementHasBeenInView(0.3);

  return (
    <Container>
      <Image fill src={backgroundUrl} alt="" style={{ objectFit: 'cover' }} />
      <OverlayContainer
        ref={ref}
        OverlayContainerBackgroundImage={OverlayContainerBackgroundImage}
      >
        {Content(TextContainerInView)}
      </OverlayContainer>
    </Container>
  );
}

export default SectionWithBackgroundAndOverlay;
