import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import VideoModal from './modal';

import SectionWithBackgroundAndOverlay from '@/utils/atoms/SectionWithBackgroundAndOverlay';
import Button from '@/utils/atoms/buttons';
import { LanguageSelector } from '@/utils/context';

const ContentContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: ${({ theme }) => theme.variables.maxWidth}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  position: relative;
  left: ${({ inView, rtl }) => (inView ? ' 0' : rtl ? '100vw' : '-100vw')};

  display: flex;
  flex-direction: column;

  width: 50%;
  height: fit-content;
  padding: 100px 20px;

  color: ${({ theme }) => theme.colors.secondary.main};

  transition: left 1s;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding-bottom: 0px;
    width: 100%;
  }
`;
const Title = styled.h2`
  width: 100%;

  font-size: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 30px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;

    font-size: 33px;
  }
`;
const SubTitle = styled.p`
  width: 100%;
  margin: 20px 0;

  font-size: 14px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 14px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxSmall}px) {
    font-size: 17px;
  }
`;
const VideoContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: fit-content;
  padding: 100px 20px;

  & > p {
    margin-top: 25px;

    color: ${({ theme }) => theme.colors.secondary.main};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
`;
const PlayBottonContainer = styled.div`
  position: relative;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.secondary.main};

  transform: ${({ inView }) => (inView ? 'scale(1)' : 'scale(0)')};
  transition: transform 1s;

  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary.main};
  }
  & > svg {
    position: relative;

    height: 35px;

    color: ${({ theme }) => theme.colors.primary.main};
    transition: color 0.3s;
  }

  &:hover {
    & > svg {
      color: ${({ theme }) => theme.colors.primary.first_shade};
    }
  }
`;
const rotate = keyframes`
  0% { 
    width: 100%;
    height: 100%;
    opacity:1;
  }
  50% {  
    width: 135%;
    height: 135%;
    opacity:0;
  }
  100% {
    width: 100%;
    height: 100%;
    opacity:0;
  }
`;
const PlayButtonShade = styled.div`
  position: absolute;
  z-index: -1;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary.first_shade};
  animation: ${rotate} 3s linear infinite ${({ delay }) => delay};
  opacity: 1;
  width: 135%;
`;

function FourthSection() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const content = (ContentContainerInView) => (
    <ContentContainer>
      <TextContainer
        inView={ContentContainerInView}
        rtl={LanguageSelector(true)}
      >
        <Title>
          {LanguageSelector(
            'الطريقة الذكية لإصلاح أجهزة الكمبيوتر.',
            'Discount up to 50% for member only.'
          )}
        </Title>
        <SubTitle>
          {LanguageSelector(
            'خدمات الكمبيوتر هنا للمساعدة في دعم عملك!',
            'Diam consequat tortor risus dictum facilisi sed. Diam placerat adipiscing semper sollicitudin vitae. Hac mattis nec ornare maximus nulla sem semper fringilla at est rutrum.'
          )}
        </SubTitle>
        <Button>{LanguageSelector('إكتشف أكثر', 'Join membership')}</Button>
      </TextContainer>
      <VideoContainer>
        <VideoModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          url="https://www.youtube.com/watch?v=NpEaa2P7qZI"
        />
        <PlayBottonContainer
          inView={ContentContainerInView}
          onClick={openModal}
        >
          <PlayButtonShade delay="0s" />
          <PlayButtonShade delay="0.3s" />
          <PlayButtonShade delay="0.9s" />
          <FontAwesomeIcon icon={faPlay} />
        </PlayBottonContainer>
        <p>Play Video</p>
      </VideoContainer>
    </ContentContainer>
  );

  return (
    <SectionWithBackgroundAndOverlay
      Content={content}
      backgroundUrl="/computer-fixing-service-or-maintenance-concept.webp"
      OverlayContainerBackgroundImage="radial-gradient(at top right, #3BFBC3CC 0%, #008bc5 89%);"
    />
  );
}

export default FourthSection;
