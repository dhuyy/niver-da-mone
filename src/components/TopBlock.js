import styled from '@emotion/styled';
import { gridArea, zIndex } from 'styled-system';

import { Flex } from './Flex';

const Container = styled(Flex)`
  ${gridArea};
  ${zIndex};
`;

Container.defaultProps = {
  p: '60px',
  gridArea: 'Top',
  zIndex: '1',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'space-between',
};

const TopBlock = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TopBlock;
