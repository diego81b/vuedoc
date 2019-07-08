module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/vuedoc/',
  dest: process.env.DEPLOY_ENV === 'gitlab' ? './public' : 'docs/.vuepress/dist',
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
