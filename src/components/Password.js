import React, { useState } from 'react';
import styled from '@emotion/styled';
import { space, height, fontSize } from 'styled-system';
import RICIBs from 'react-individual-character-input-boxes';

import { useAudio } from '../hooks/useAudio';
import { Flex } from './Flex';
import { BaseButton } from './BaseButton';
import PasswordStyles from './Password.css';

import errorSound from '../assets/audio/error.mp3';
import correctSound from '../assets/audio/correct.mp3';

const Container = styled(Flex)`
  ${space};
`;

Container.defaultProps = {
  mb: '24px',
  alignItems: 'center',
};

const SubmitButton = styled(BaseButton)`
  ${height}
  ${fontSize}

  font-family: 'Verdana';
`;

SubmitButton.defaultProps = {
  ml: '16px',
  px: '16px',
  py: '8px',
  fontSize: '18px',
  height: 'calc(100% - 13px)',
};

const Password = ({
  index,
  answer,
  inputRegExp,
  validator,
  validityPasswordList,
  setValidityPasswordList,
}) => {
  const [, playCorrect] = useAudio(correctSound);
  const [, playError] = useAudio(errorSound);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filled, setFilled] = useState(false);
  const [valid, setValid] = useState(false);

  const answerLetters = answer.split('');

  const handleOutputString = output => {
    const transformedOutput = output.toUpperCase();

    setValid(validator(transformedOutput, answer));
    setFilled(transformedOutput.length === answerLetters.length);
  };

  const handleSubmit = () => {
    if (valid) {
      playCorrect();
      setIsSubmitted(true);

      const passwordList = [...validityPasswordList];
      passwordList.splice(index, 1, true);

      setValidityPasswordList(passwordList);
    } else {
      playError();
    }
  };

  return (
    <Container style={PasswordStyles}>
      <RICIBs
        amount={answerLetters.length}
        handleOutputString={handleOutputString}
        inputProps={answerLetters.map(() => ({
          className: 'box',
        }))}
        inputRegExp={inputRegExp}
      />
      <SubmitButton
        {...(filled && { className: valid ? 'valid' : 'invalid' })}
        onClick={handleSubmit}
      >
        {isSubmitted && valid ? '✅ SENHA CORRETA' : '🤔 VALIDAR SENHA'}
      </SubmitButton>
    </Container>
  );
};

export default Password;
