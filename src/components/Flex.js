import styled from '@emotion/styled';
import {
  space,
  width,
  flexDirection,
  flex,
  justifyContent,
  alignItems,
  fontSize,
  alignSelf,
  flexWrap,
  flexBasis,
  textAlign,
  maxWidth,
} from 'styled-system';

export const Flex = styled.div`
  display: flex;

  ${width}
  ${maxWidth}
  ${flexDirection}
  ${flexBasis}
  ${flexWrap}
  ${flex}
  ${space}
  ${justifyContent}
  ${alignItems}
  ${fontSize}
  ${alignSelf}
  ${textAlign}
`;
