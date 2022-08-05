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

const Tip = ({ text }) => {
  return <TipText>{text}</TipText>;
};

export default Tip;
