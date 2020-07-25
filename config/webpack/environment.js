const { environment } = require('@rails/webpacker')

// ↓追加ここから

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)

// ↑追加ここまで

module.exports = environment
