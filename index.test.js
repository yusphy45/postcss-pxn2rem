let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

// Write tests here

it('单位转换', async () => {
  await run('a{ height: 26pxn; font-size: 32pxn; }',
    'a{ height: 1.1093rem; font-size: 1.3653rem; }',
    { markBaseWidth: 375, columns: 16 })
})
