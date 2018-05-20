module.exports = {
  title: 'TOKIN',
  description:
    'Tokin is a real-time, real-world MMO game for building teams and finding opportunities. Players network with people and bots within purpose groups in order to level up, win `crypto`, and be an owner of Tokin.io.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Whitepaper', link: '/whitepaper.md' },
      { text: 'Laws', link: '/constitution.md' },
      { text: 'Join', link: '/join.md' },
      { text: 'Play Now', link: '/check-in.md' }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/whitepaper.md', 'Whitepaper'],
      ['/join.md', 'Join the fun'],
      ['/constitution.md', 'The law'],
      ['/check-in.md', 'Play Now']
    ],
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'tokin-systems/tokin-landing',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Improve this page, earn some Tok!'
  }
}
