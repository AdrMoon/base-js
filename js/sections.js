import {generateSection} from './ui.js';

const header = {

};

// navigation: [
//   {
//     source: './assets/icons/logo.svg',
//     description: 'Some description 1',
//   },
//   {
//     source: './assets/icons/arrow.svg',
//     description: 'Some description 2',
//   },
//   {
//     source: './assets/icons/moon.svg',
//     description: 'Some description 3',
//   },
//   {
//     source: './assets/icons/google.svg',
//     description: 'Some description 4',
//   },
// ],




const section1 = {
  title: 'Some title',
  texts: 'Some text 1.',
  links: [
    {
      linkApple: [
        {
          url: 'https://example.com',
          content: {
            type: 'image',
            data: './assets/icons/apple.svg',
          },
        },
      ],
    },
    {
      linkGoogle: [
        {
          url: 'https://example.com',
          content: {
            type: 'image',
            data: './assets/icons/google.svg',
          },
        },
      ],
    },
  ],
  image: {
    source: './assets/images/1.jpg',
    description: 'Some description',
  },
};
//   {
//     source: './assets/icons/apple.svg',
//     description: 'Some description 1',
//   },
//   {
//     source: './assets/icons/google.svg',
//     description: 'Some description 2',
//   },
// ],

const section2 = {
  title: 'Some title',
  texts: ['Some text 1.', 'Some text 2.'],
  image: {
    source: './assets/images/2.jpg',
    description: 'Some description',
  },
};

const section3 = {
  title: 'Some title3',
  texts: ['Some text 1.', 'Some text 2.', 'Some text 3.'],
  image: {
    source: './assets/images/3.jpg',
    description: 'Some description',
  },
};

const section4 = {
  title: 'Some title4',
  texts: ['Some text 1.', 'Some text 2.', 'Some text 3.'],
  buttonText: 'Order a consultation',
};

const section5 = {
brands: [
  {
    name: 'Rosegal',
    logo: {
      lightSource: './assets/brands/light/1.svg',
      darkSource: './assets/brands/dark/1.svg',
    },
  },
  {
    name: 'Gearbest',
    logo: {
      lightSource: './assets/brands/light/2.svg',
      darkSource: './assets/brands/dark/2.svg',
    },
  },
  {
    name: 'Allegro',
    logo: {
      lightSource: './assets/brands/light/3.svg',
      darkSource: './assets/brands/dark/3.svg',
    },
  },
  {
    name: 'AliExpress',
    logo: {
      lightSource: './assets/brands/light/4.svg',
      darkSource: './assets/brands/dark/4.svg',
    },
  },
  {
    name: 'Booking.com',
    logo: {
      lightSource: './assets/brands/light/5.svg',
      darkSource: './assets/brands/dark/5.svg',
    },
  },
  {
    name: 'MediaMarkt',
    logo: {
      lightSource: './assets/brands/light/6.svg',
      darkSource: './assets/brands/dark/6.svg',
    },
  },
  {
    name: 'RTVEuroAGD',
    logo: {
      lightSource: './assets/brands/light/7.svg',
      darkSource: './assets/brands/dark/7.svg',
    },
  },
  {
    name: 'Groupon',
    logo: {
      lightSource: './assets/brands/light/8.svg',
      darkSource: './assets/brands/dark/8.svg',
    },
  },
],
};

const footer = {
columns: [
{
  title: 'Learn',
  list: [
    {
    url: 'https://example.com',
      content: {
      type: 'text',
      data: 'Help center',
      },
    },
    {
    url: 'https://example.com',
      content: {
      type: 'text',
      data: 'Join ZEN team',
      },
    },
    {
    url: 'https://example.com',
      content: {
      type: 'text',
      data: 'Privacy Policy',
      },
    },
    {
    url: 'https://example.com',
      content: {
      type: 'text',
      data: 'Cookies',
      },
    },
    {
    url: 'https://example.com',
      content: {
      type: 'text',
      data: 'Terms of use',
      },
    },
  ],
},
{
  title: 'Discover',
  list: [
    {
      url: 'https://example.com',
        content: {
        type: 'text',
        data: 'For developers',
        },
      },
      {
      url: 'https://example.com',
        content: {
        type: 'text',
        data: 'Apple Pay',
        },
      },
      {
      url: 'https://example.com',
        content: {
        type: 'text',
        data: 'Google Pay',
        },
      },
  ],
},
{
  title: 'Offer',
  list: [
    {
      url: 'https://example.com',
        content: {
        type: 'text',
        data: 'Business',
        },
      },
    {
      url: 'https://example.com',
        content: {
        type: 'text',
        data: 'Personal',
        },
      },
  ],
},
{
  title: 'Language',
  list: [
    {
      url: 'https://example.com',
        content: {
        type: 'text',
        data: 'English',
        },
      },
      {
      url: 'https://example.com',
        content: {
        type: 'text',
        data: 'Polish',
        },
      },
  ],
},
{
  title: 'Follow us',
  list: [
    {
      url: 'https://example.com',
      content: {
        type: 'image',
        data: './assets/icons/in.svg',
      },
    },
  ],
},
{
  title: 'Contact',
  list: [
    {
    url: 'https://example.com',
    email: 'mailto::hello@zen.com',
    },
  ],
},
],
info: [
  {
    source: './assets/icons/logo2.svg',
    description: 'Some description',
  },
   ['Some text 1.', 'Some text 2.', 'Some text 3.', 'Some text 4.', 'Some text 5.', 'Some text 6.'],
  {
    url: 'https://example.com',
    content: {
      type: 'image',
    data: './assets/icons/developer.svg',
    },
  },
],
};








// images: [
//   {
//     source: './assets/1.jpg',
//     description: 'Some description 1',
//   },
//   {
//     source: './assets/2.jpg',
//     description: 'Some description 2',
//   },
// ],


console.log(generateSection(section3));

const $app = document.querySelector('#app');
$app.innerHTML = generateSection(section3);

// интерполяция - это синтаксическая конструкция, которая используется только внутри шаблонной строки и позволяет написать любое js выражение.
// `один, ${someVar}, три.`
