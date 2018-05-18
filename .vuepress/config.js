module.exports = {
  title: 'TOKIN',
  description: 'A new way to play the game.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Whitepaper', link: '/whitepaper.md' },
      //      { text: 'Game', link: '/game.md' },
      { text: 'Join', link: '/join.md' },
      { text: 'Play Now', link: '/check-in.md' }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/whitepaper.md', 'Whitepaper'],
      ['/join.md', 'Join the fun']
    ]
  }
}
