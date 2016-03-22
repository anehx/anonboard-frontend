/* global require, module */

"use strict"

let EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      optional: [ 'es7.decorators', 'es7.asyncFunctions' ],
    },
    sassOptions: {
      extension: 'sass',
      includePaths: [ 'bower_components/Bootflat/bootflat/scss' ]
    },
    'ember-cli-qunit': {
      useLintTree: false
    }
  })

  app.import('bower_components/bootstrap/dist/css/bootstrap.css')
  app.import('bower_components/bootstrap/dist/js/bootstrap.js')

  return app.toTree()
}
