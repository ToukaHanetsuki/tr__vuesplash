const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
  proxy: '0.0.0.0:8081', // アプリの起動アドレス
  open: false // ブラウザを自動で開かない
})
  .ts('resources/ts/app.ts', 'public/js')
  .webpackConfig({
    resolve: {
      extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] },
          exclude: /node_modules/
        }
      ]
    }
  })
  .version()
