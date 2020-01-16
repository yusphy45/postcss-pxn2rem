let postcss = require('postcss')

module.exports = postcss.plugin('postcss-pxn2rem',
  (opts = { markBaseWidth: 750, columns: 10 }) => {
    let { markBaseWidth, columns } = opts
    // Work with options here

    return root => {
      // Transform CSS AST here
      root.replaceValues(/\d+pxn/i, { fast: 'pxn' }, string => {
        return `${ (parseInt(string) /
          markBaseWidth * columns).toFixed(4) }rem`
      })
    }
  })
