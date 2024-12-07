  export default {
    title: `AmirSenpai`,
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
        {icon: 'telegram', link: 'https://t.me/itsdekusenpai'}
      ]
    }
  };