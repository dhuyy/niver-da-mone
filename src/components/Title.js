import styled from '@emotion/styled';
import { color, fontSize } from 'styled-system';

import { Flex } from './Flex';

const TitleText = styled(Flex)`
  ${color};
  ${fontSize};

  font-family: 'BlackPearl';
`;

TitleText.defaultProps = {
  as: 'h1',
  m: 0,
  color: 'white',
  fontSize: '100px',
};

const Title = ({ challengeIndex }) => {
  return (
    <TitleText>
      {challengeIndex === 7
        ? ''
        : challengeIndex === 0
        ? 'Desafio Exemplo'
        : challengeIndex === 6
        ? 'Desafio Final'
        : `Desafio #${challengeIndex}`}
    </TitleText>
  );
};

export default Title;
