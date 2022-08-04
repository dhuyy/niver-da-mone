import styled from '@emotion/styled';
import { space } from 'styled-system';

export const BaseButton = styled.button`
  ${space}

  transition: all 0.5s ease 0s;
  font-weight: bold;
  text-align: center;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 3px 0px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  outline: none;
  border: none;
`;

BaseButton.defaultProps = {
  ml: '16px',
};
