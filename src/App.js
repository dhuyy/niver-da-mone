import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { gridArea } from 'styled-system';
import { useLocalStorage } from 'react-use';

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
import AppStyles from './App.css';

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
  const [value, setValue] = useLocalStorage('challengeIndex', 0);
  const [animation, setAnimation] = useState('');
  const [display, setDisplay] = useState(false);
  const [challengeIndex, setChallengeIndex] = useState(value);
  const challenges = useChallengeData();
  const [isAllPasswordsValid, setIsAllPasswordsValid] = useState(false);
  const [videoRef, setVideoRef] = useState(null);
  const { tip, videoSrc, videoDuration, inputRegExp, answers, validator } =
    challenges[challengeIndex];
  const [validityPasswordList, setValidityPasswordList] = useState(
    answers.map(() => false)
  );
  const show = () => {
    setAnimation('show');
    setDisplay(true);
  };
  const hide = async ms => {
    setAnimation('hide');
    await new Promise(r => setTimeout(r, ms));
    setDisplay(false);
  };
  const handleIncrementIndex = async () => {
    hide(1000);

    await new Promise(r => setTimeout(r, 1250));
    await videoRef.current.play();
    await new Promise(r => setTimeout(r, videoDuration));

    const newChallengeIndex = challengeIndex + 1;

    setChallengeIndex(newChallengeIndex);
    setValue(newChallengeIndex);

    show();
  };
  const handleVideoRef = ref => {
    setVideoRef(ref);
  };

  useEffect(() => {
    setAnimation('show');
    setDisplay(true);
  }, []);

  useEffect(() => {
    setIsAllPasswordsValid(validityPasswordList.every(isValid => isValid));
  }, [validityPasswordList]);

  return (
    <>
      {videoSrc && (
        <VideoPlayer src={videoSrc} handleVideoRef={handleVideoRef} />
      )}
      {display ? (
        <>
          <Grid style={AppStyles} className={animation}>
            <TopBlock>
              <Title challengeIndex={challengeIndex} />
              <Tip text={tip} />
            </TopBlock>
            <BottomBlock>
              {answers.length > 0 ? (
                <>
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
                    <SkipButton
                      index={challengeIndex}
                      show={isAllPasswordsValid}
                      handleIncrementIndex={handleIncrementIndex}
                    />
                    {/* <SkipButton
                      index={challengeIndex}
                      show={true}
                      handleIncrementIndex={handleIncrementIndex}
                    /> */}
                  </SkipButtonContainer>
                </>
              ) : (
                <h1 style={{ color: 'white' }}>Dica Bonus</h1>
              )}
            </BottomBlock>
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default App;
