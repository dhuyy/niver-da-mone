import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { gridArea } from 'styled-system';

import { useChallengeData } from './hooks/useChallengeData';
import Grid from './components/Grid';
import TopBlock from './components/TopBlock';
import BottomBlock from './components/BottomBlock';
import VideoPlayer from './components/VideoPlayer';
import Password from './components/Password';
import Title from './components/Title';
import Tip from './components/Tip';
import SkipButton from './components/SkipButton';
import { Flex } from './components/Flex';

const PasswordContainer = styled(Flex)`
  ${gridArea}
`;

PasswordContainer.defaultProps = {
  p: '16px',
  gridArea: 'Left',
  justifyContent: 'center',
  flexDirection: 'column',
};

const SkipButtonContainer = styled(Flex)`
  ${gridArea}
`;

SkipButtonContainer.defaultProps = {
  p: '16px',
  gridArea: 'Right',
  justifyContent: 'center',
  alignItems: 'center',
};

const App = () => {
  const [challengeIndex, setChallengeIndex] = useState(0);
  const challenges = useChallengeData();
  const [isAllPasswordsValid, setIsAllPasswordsValid] = useState(false);
  const { tip, videoSrc, inputRegExp, answers, validator } =
    challenges[challengeIndex];
  const [validityPasswordList, setValidityPasswordList] = useState(
    answers.map(() => false)
  );
  const handleIncrementIndex = () => {
    setChallengeIndex(challengeIndex + 1);
  };

  useEffect(() => {
    setIsAllPasswordsValid(validityPasswordList.every(isValid => isValid));
  }, [validityPasswordList]);

  return (
    <Grid>
      <VideoPlayer src={videoSrc} />
      <TopBlock>
        <Title challengeIndex={challengeIndex} />
        <Tip text={tip} />
      </TopBlock>
      <BottomBlock>
        <PasswordContainer>
          {answers.map((answer, index) => (
            <Password
              key={`answer-${index}`}
              index={index}
              answer={answer}
              inputRegExp={inputRegExp}
              validator={validator}
              validityPasswordList={validityPasswordList}
              setValidityPasswordList={setValidityPasswordList}
            />
          ))}
        </PasswordContainer>
        <SkipButtonContainer>
          <SkipButton index={challengeIndex}
            show={isAllPasswordsValid}
            handleIncrementIndex={handleIncrementIndex}
          />
          {/* <SkipButton
            index={challengeIndex}
            show={true}
            handleIncrementIndex={handleIncrementIndex}
          /> */}
        </SkipButtonContainer>
      </BottomBlock>
    </Grid>
  );
};

export default App;
