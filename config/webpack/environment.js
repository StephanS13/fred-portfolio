const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// Bootstrap 4 has a dependency over jQuery & Popper.js:
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
      'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default']
  })
)

module.exports = environment



