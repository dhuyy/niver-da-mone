import styled from '@emotion/styled';
import { width, height } from 'styled-system';

const Input = styled.input`
  ${width};
  ${height};
`;

Input.defaultProps = {
  width: '200px',
  height: '40px',
};

const Password = () => {
  return <Input type="text" />;
};

export default Password;
