/* global require, module */

"use strict"

let EmberApp = require('ember-cli/lib/broccoli/ember-app')
let Funnel   = require('broccoli-funnel')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      optional: [ 'es7.decorators', 'es7.asyncFunctions' ],
    },
    sassOptions: {
      extension: 'sass',
      includePaths: [ 'bower_components/mui/src/sass' ]
    },
    autoprefixer: {
      browsers: [ 'last 2 versions' ],
      cascade: false
    },
    'ember-cli-qunit': {
      useLintTree: false
    }
  })

  let opensans = new Funnel('bower_components/open-sans-fontface/fonts', {
    destDir: '/assets/fonts',
    include: [ '**/*' ]
  })

  app.import('bower_components/At.js/dist/js/jquery.atwho.js')
  app.import('bower_components/At.js/dist/css/jquery.atwho.css')

  app.import('bower_components/Caret.js/dist/jquery.caret.js')

  app.import('bower_components/open-sans-fontface/open-sans.css')

  return app.toTree(opensans)
}
