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
      includePaths: [ 'bower_components/mui/src/sass' ]
    },
    autoprefixer: {
      browsers: [ 'last 2 versions' ],
      cascade: false
    },
    googleFonts: [
      'Open+Sans:300',
      'Raleway:300'
    ],
    'ember-font-awesome': {
      useScss: true
    },
    'ember-cli-qunit': {
      useLintTree: false
    }
  })

  app.import('bower_components/bootstrap/dist/css/bootstrap.css')
  app.import('bower_components/bootstrap/dist/css/bootstrap.css', { destDir: 'assets' })
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', { destDir: '/fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', { destDir: '/fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', { destDir: '/fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: '/fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', { destDir: '/fonts'});

  return app.toTree()
}
