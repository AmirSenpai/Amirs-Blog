// Import the npm version script
import getNpmVersion from './get-npm-version.js';

export default {
  title: `AmirSenpai`,
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
    ],
    // Inject npm version dynamically
    subtitle: `npm version: ${getNpmVersion()}`  // Add the npm version to the config
  }
};
