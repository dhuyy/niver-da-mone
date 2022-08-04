import doorOne from '../assets/video/door_1.mp4';
import doorTwo from '../assets/video/door_2.mp4';
import doorThree from '../assets/video/door_3.mp4';
import doorFour from '../assets/video/door_4.mp4';

export const useChallengeData = () => {
  return [
    {
      tip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, unde?',
      videoSrc: doorOne,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['SIMONE', 'TOME'],
      validator: (input, word) => input === word,
    },
    {
      tip: 'Tempora vel, molestias voluptas facilis consequuntur ipsa eligendi voluptate nemo officia iste?',
      videoSrc: doorTwo,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['CISOEUSDJ'],
      validator: (input, word) => input === word,
    },
    {
      tip: 'Tenetur error, odio quidem explicabo nostrum? Rem alias consequatur deserunt harum.',
      videoSrc: doorThree,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['SIMONE'],
      validator: (input, word) => input === word,
    },
    {
      tip: 'Deleniti quas voluptates magnam, commodi aut cupiditate architecto doloremque debitis obcaecati quae!',
      videoSrc: doorFour,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['SIMONE'],
      validator: (input, word) => input === word,
    },
    {
      tip: 'Distinctio non odit pariatur quidem inventore ipsum quaerat sequi asperiores nulla. Vitae esse autem quam.',
      videoSrc: doorOne,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['SIMONE'],
      validator: (input, word) => input === word,
    },
    {
      tip: 'Debitis numquam est consequatur, itaque eaque corporis fuga cum. Totam, velit magnam?',
      videoSrc: doorTwo,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['SIMONE'],
      validator: (input, word) => input === word,
    },
    {
      tip: 'Debitis numquam est consequatur, itaque eaque corporis fuga cum. Totam, velit magnam?',
      videoSrc: doorThree,
      inputRegExp: /^[a-zA-Z]$/,
      answers: ['SIMONE'],
      validator: (input, word) => input === word,
    },
  ];
};
