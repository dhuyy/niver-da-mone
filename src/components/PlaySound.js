import React, { useEffect } from 'react';

import { useAudio } from '../hooks/useAudio';

import clapsSound from '../assets/audio/claps.mp3';

const PlaySound = ({ children }) => {
  const [, playClaps] = useAudio(clapsSound);
  useEffect(() => {
    setTimeout(() => {
      playClaps();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default PlaySound;
