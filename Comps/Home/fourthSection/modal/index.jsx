import { memo } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import Modal from 'react-modal';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: '10000',
    backgroundColor: '#000000b0',
  },
};
const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
const VideoContainer = styled.div`
  position: relative;
  width: 90vw;
  height: 90vh;
`;
const Player = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
`;

Modal.setAppElement('#__next');

function VideoModal({ modalIsOpen, closeModal, url }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalCloseButton onClick={closeModal} type="button">
        X
      </ModalCloseButton>
      <VideoContainer>
        <Player url={url} controls poster="/placeholder.webp" />
      </VideoContainer>
    </Modal>
  );
}

export default memo(VideoModal);
