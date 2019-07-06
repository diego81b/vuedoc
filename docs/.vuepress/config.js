module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/vuedoc/',
  plugins: [
    'vuepress-plugin-nprogress',
    ['serve', {
      port: 1234,
      staticOptions: {
        dotfiles: 'allow',
      },
    }],
  ]
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
