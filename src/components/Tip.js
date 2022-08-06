import styled from '@emotion/styled';
import { color, fontSize } from 'styled-system';

import { Flex } from './Flex';

const TipText = styled(Flex)`
  ${color};
  ${fontSize};

  font-family: 'BlackPearl';
`;

TipText.defaultProps = {
  as: 'h2',
  m: 0,
  color: 'white',
  fontSize: '50px',
};

const BigTipText = styled(Flex)`
  ${color};
  ${fontSize};

  font-family: 'BlackPearl';
`;

BigTipText.defaultProps = {
  as: 'h1',
  m: 0,
  color: 'white',
  fontSize: '75px',
};

const Tip = ({ text, challengeIndex }) => {
  return challengeIndex === 7 ? (
    <BigTipText>{text}</BigTipText>
  ) : (
    <TipText>{text}</TipText>
  );
};

export default Tip;
