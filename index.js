let postcss = require('postcss')

module.exports = postcss.plugin('postcss-pxn2rem',
  (opts = { markBaseWidth: 750, columns: 10 }) => {
    let { markBaseWidth, columns } = opts
    // Work with options here

    return root => {
      // Transform CSS AST here
      root.replaceValues(/(\d+.\d+|\d+)pxn/i, { fast: 'pxn' }, string => {
        let val = parseFloat(string.replace(/[^\d.]/gi, ''))
        return `${ (val * columns / markBaseWidth)
          .toFixed(4) }rem`
      })
    }
  })
