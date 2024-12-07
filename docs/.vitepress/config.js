import getNpmVersion from '../get-npm-version.js';

export default {
  title: 'AmirSenpai',
  base: '/Amirs-Blog/',
  themeConfig: {
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'درباره من', link: '/about' },
    ],
    sidebar: {
      '/posts/': [
        {
          text: '#Blog Posts',
          items: [
            { text: '#1 Who Am I ? (FA)', link: '/posts/whoami' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AmirSenpai' },
      { icon: 'telegram', link: 'https://t.me/itsdekusenpai' },
    ],
    // Display the npm version in the header
    version: getNpmVersion(), // Ensure this returns the correct version
  },
};
