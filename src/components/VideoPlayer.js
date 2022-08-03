import React from 'react';
import { useVideo } from 'react-use';
import styled from '@emotion/styled';
import { position, zIndex, width, height } from 'styled-system';

const Video = styled.video`
  ${position}
  ${zIndex}
  ${width}
  ${height}
  
  object-fit: cover;
`;

Video.defaultProps = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: '0',
};

function VideoPlayer({ src }) {
  const [video] = useVideo(<Video src={src} autoPlay muted loop />);

  return video;
}

export default VideoPlayer;
