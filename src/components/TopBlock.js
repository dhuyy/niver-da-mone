import styled from '@emotion/styled';
import { gridArea, zIndex } from 'styled-system';

import { Flex } from './Flex';

const Container = styled(Flex)`
  ${gridArea};
  ${zIndex};
`;

Container.defaultProps = {
  gridArea: 'Top',
  zIndex: '1',
};

const TopBlock = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TopBlock;
