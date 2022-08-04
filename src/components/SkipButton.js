import styled from '@emotion/styled';
import {
  width,
  height,
  space,
  display,
  borderRadius,
  alignItems,
  justifyContent,
  fontSize,
} from 'styled-system';

import { BaseButton } from './BaseButton';

import skipOne from '../assets/image/skip_1.png';
import skipTwo from '../assets/image/skip_2.png';
import skipThree from '../assets/image/skip_3.png';
import skipFour from '../assets/image/skip_4.png';
import skipFive from '../assets/image/skip_5.png';
import skipSix from '../assets/image/skip_6.png';
import skipSeven from '../assets/image/skip_7.png';

const Button = styled(BaseButton)`
  ${width};
  ${height};
  ${display};
  ${alignItems};
  ${justifyContent};
`;

Button.defaultProps = {
  p: '8px',
  width: '75%',
  height: 'auto',
  alignItems: 'center',
  display: 'flex',
};

const ImageInsideButton = styled.img`
  ${width};
  ${height};
  ${space};
  ${borderRadius};
`;

ImageInsideButton.defaultProps = {
  m: 0,
  mr: '16px',
  width: '128px',
  height: '128px',
  borderRadius: '5px',
};

const Text = styled.p`
  ${space};
  ${fontSize};
`;

Text.defaultProps = {
  m: 0,
  fontSize: '18px',
};

const FUNNY_MEMES = [
  skipOne,
  skipTwo,
  skipThree,
  skipFour,
  skipFive,
  skipSix,
  skipSeven,
];

const FUNNY_PHRASES = [
  'MUITO BEM.. VAI AVANÇAR PARA O PRÓXIMO?',
  'VAI CONTINUAR?',
  'TU QUER MESMO ESSE PRESENTE NÉ.. VAI CONTINUAR?',
  'AGORA É PRA SE FUDER, VAI CONTINUAR?',
  'PORRAAAAAN.. ESSA EU NÃO ESPERAVA, VAI CONTINUAR?',
  'TÔ ACHANDO QUE DEIXEI FÁCIL DEMAIS, VAI CONTINUAR?',
  'VÁ.. SÓ CONTINUE PRA VOCÊ VER A LAPADA',
];

const SkipButton = ({ index, show, handleIncrementIndex }) => {
  return show ? (
    <Button onClick={handleIncrementIndex}>
      <ImageInsideButton src={FUNNY_MEMES[index]} alt="Skip Button" />
      <Text>{`${FUNNY_PHRASES[index]} ⏩⏩⏩⏩⏩`}</Text>
    </Button>
  ) : null;
};

export default SkipButton;
