import styled from '@emotion/styled';
import { gridArea, zIndex } from 'styled-system';

import { Flex } from './Flex';

const Container = styled(Flex)`
  ${gridArea};
  ${zIndex};
`;

Container.defaultProps = {
  gridArea: 'Bottom',
  zIndex: '1',
};

const BottomBlock = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BottomBlock;
