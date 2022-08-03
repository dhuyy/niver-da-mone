import styled from '@emotion/styled';
import { gridArea, zIndex } from 'styled-system';

import { Flex } from './Flex';

const Container = styled(Flex)`
  ${gridArea};
  ${zIndex};

  border: 2px solid white; /** REMOVE THIS */
`;

Container.defaultProps = {
  gridArea: 'Bottom',
  zIndex: '1',
  alignItems: 'center',
  justifyContent: 'center',
};

const BottomBlock = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BottomBlock;
