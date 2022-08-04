import React, { useEffect } from 'react';
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

function VideoPlayer({ src, handleVideoRef }) {
  const [video, , , ref] = useVideo(<Video src={src} />);

  useEffect(() => {
    handleVideoRef(ref);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return video;
}

export default VideoPlayer;
