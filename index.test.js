let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

// Write tests here

it('单位转换', async () => {
  await run(`a{ padding: 10pxn 8pxn; 
    width: 37.5pxn; height: 26pxn; font-size: 32pxn; }`,
    `a{ padding: 0.4267rem 0.3413rem; 
    width: 1.6000rem; height: 1.1093rem; font-size: 1.3653rem; }`,
    { markBaseWidth: 375, columns: 16 })
})
