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
  gridTemplateRows: '50vh 50vh',
};

const Grid = ({ children, className }) => {
  return <GridContainer className={className}>{children}</GridContainer>;
};

export default Grid;
