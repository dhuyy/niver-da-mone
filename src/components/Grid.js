import styled from '@emotion/styled';
import { display, gridTemplateColumns, gridTemplateRows } from 'styled-system';

const GridContainer = styled.div`
  ${display};
  ${gridTemplateColumns};
  ${gridTemplateRows};

  grid-template-areas:
    'Top'
    'Bottom';
`;

GridContainer.defaultProps = {
  display: 'grid',
  gridTemplateColumns: '100vw',
  gridTemplateRows: '35vh 65vh',
};

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default Grid;
