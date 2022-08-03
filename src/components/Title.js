import styled from '@emotion/styled';
import { color } from 'styled-system';

const H1 = styled.h1`
  ${color};
`;

H1.defaultProps = {
  color: 'navy',
};

const Title = ({ children }) => {
  return (
    <>
      <H1>{children}</H1>
    </>
  );
};

export default Title;
