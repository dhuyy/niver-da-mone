import doorOne from '../assets/video/door_1.mp4';
import doorTwo from '../assets/video/door_2.mp4';
import doorThree from '../assets/video/door_3.mp4';
import doorFour from '../assets/video/door_4.mp4';

const friends = [
  'Cassia',
  'Cassia',
  'Eli',
  'Patricia',
  'Renata',
  'Kat',
  'Isabelly',
  'Jessica',
  'Debora',
  'Malu',
  'Ester',
  'Alana',
];

export const useChallengeData = () => {
  return [
    {
      tip: '"A chave do tesouro esta escondida atras do quadro da arara azul"',
      videoSrc: doorOne,
      videoDuration: 4000,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['SIMONE', 'TOME'],
      validator: (input, word) => input === word,
    },
    {
      tip: '"Farinha dourada que da sabor a vida, a chave do tesouro esta na sua comida favorita"',
      videoSrc: doorTwo,
      videoDuration: 9400,
      inputRegExp: /^[0-9]$/,
      answers: ['56'],
      validator: (input, word) => input === word,
    },
    {
      tip: '"A chave do tesouro esta entre as fragancias que perfumam o ambiente, uma outra pessoa pode ate sentir mas tem que ser cliente"',
      videoSrc: doorThree,
      videoDuration: 10000,
      inputRegExp: /^[a-zA-Z]$/,
      answers: [
        friends
          .sort()
          .map(friend => friend.charAt(0))
          .join(''),
      ],
      validator: (input, word) => input === word,
    },
    {
      tip: '"Terra dos canais, das tulipas e de incoparavel beleza, a chave do tesouro esta na garrafa que trouxemos de cerveja"',
      videoSrc: doorFour,
      videoDuration: 4100,
      inputRegExp: /^[0-9]$/,
      answers: ['78'],
      validator: (input, word) => input === word,
    },
    {
      tip: '"Companheira fitness de todas as manhas, voce sempre a leva. A chave do tesouro esta em uma bolsa que voce carrega"',
      videoSrc: doorOne,
      videoDuration: 4000,
      inputRegExp: /^[0-9]$/,
      answers: ['1091902'],
      validator: (input, word) => input === word,
    },
    {
      tip: '"Em todas as viagens, sempre compramos um ima na saideira. A chave do tesouro esta provavelmente na geladeira"',
      videoSrc: doorTwo,
      videoDuration: 9400,
      inputRegExp: /^[0-9]$/,
      answers: ['24'],
      validator: (input, word) => input === word,
    },
    {
      tip: '"Pequenino e amarelo, ele te da significados de antemao. A chave do tesouro esta no seu dicionario de Alemao"',
      videoSrc: doorThree,
      videoDuration: 10000,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['EOQUEOME', 'ARRUDIAR'],
      validator: (input, word) => input === word,
    },
    {
      tip: 'Parabens! Voce encontrou o seu tesouro!',
      videoSrc: null,
      videoDuration: 0,
      inputRegExp: null,
      answers: [],
      validator: () => void 0,
    },
  ];
};
