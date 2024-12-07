// docs/.vitepress/config.js

import { getNpmVersion } from './get-npm-version.js';

export default {
  title: 'AmirSenpai',
  base: '/Amirs-Blog/',
  themeConfig: {
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'درباره من', link: '/about' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '#Blog Posts',
          items: [
            { text: '#1 Who Am I ? (FA)', link: '/posts/whoami' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AmirSenpai' },
      { icon: 'telegram', link: 'https://t.me/itsdekusenpai' }
    ]
  },
  subtitle: `npm version: ${getNpmVersion()}`  // Display npm version in subtitle
};
