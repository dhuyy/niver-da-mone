import React, { useState } from 'react';

import { useChallengeData } from './hooks/useChallengeData';
import Grid from './components/Grid';
import TopBlock from './components/TopBlock';
import BottomBlock from './components/BottomBlock';
import VideoPlayer from './components/VideoPlayer';
import Password from './components/Password';
import Title from './components/Title';
import Tip from './components/Tip';

const App = () => {
  const [challengeIndex] = useState(0);

  const challenges = useChallengeData();
  const { tip, videoSrc } = challenges[challengeIndex];

  return (
    <Grid>
      <VideoPlayer src={videoSrc} />
      <TopBlock>
        <Title challengeIndex={challengeIndex} />
        <Tip text={tip} />
      </TopBlock>
      <BottomBlock>
        <Password />
      </BottomBlock>
    </Grid>
  );
};

export default App;
