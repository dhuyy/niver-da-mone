import styled from '@emotion/styled';
import {
  space,
  gridArea,
  zIndex,
  display,
  gridTemplateColumns,
  gridTemplateRows,
} from 'styled-system';

const Container = styled.div`
  ${space};
  ${gridArea};
  ${zIndex};
  ${display};
  ${gridTemplateColumns};
  ${gridTemplateRows};

  grid-template-areas: 'Left Right';
`;

Container.defaultProps = {
  p: '60px',
  display: 'grid',
  gridArea: 'Bottom',
  zIndex: '1',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  gridTemplateColumns: '0.7fr 0.3fr',
  gridTemplateRows: '1fr',
};

const BottomBlock = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BottomBlock;
