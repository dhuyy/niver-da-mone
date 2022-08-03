import React, { useState } from 'react';

import Grid from './components/Grid';
import TopBlock from './components/TopBlock';
import BottomBlock from './components/BottomBlock';
import VideoPlayer from './components/VideoPlayer';

import doorOne from './assets/video/door_1.mp4';

const App = () => {
  const [currentVideo] = useState(doorOne);

  return (
    <>
      <Grid>
        <VideoPlayer src={currentVideo} />
        <TopBlock>
          <h1>Top</h1>
        </TopBlock>
        <BottomBlock>
          <h1>Bottom</h1>
        </BottomBlock>
      </Grid>
    </>
  );
};

export default App;
