# PostCSS Pxn2rem

[PostCSS] plugin for convert pxn to rem for options(markBaseWidth, columns).

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  /* Input example */
  height: 37.5pxn;
}
```

```css
.foo {
  /* Output example */
  height: 1rem;
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-pxn2rem')({ markBaseWidth: 375, columns: 10 }),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
