import styled from '@emotion/styled';
import { color, fontSize } from 'styled-system';

import { Flex } from './Flex';

const TitleText = styled(Flex)`
  ${color};
  ${fontSize};
`;

TitleText.defaultProps = {
  as: 'h1',
  m: 0,
  color: 'white',
  fontSize: '90px',
};

const Title = ({ challengeIndex }) => {
  return (
    <TitleText>{`Desafio ${
      challengeIndex === 0 ? 'Exemplo' : `#${challengeIndex}`
    }`}</TitleText>
  );
};

export default Title;
