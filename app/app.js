import RSVP             from 'rsvp'
import Ember            from 'ember'
import Application      from 'ember-application'
import Resolver         from './resolver'
import loadInitializers from 'ember-load-initializers'
import config           from './config/environment'

window.Promise = RSVP.Promise

Ember.MODEL_FACTORY_INJECTIONS = true

/**
 * Anonboard frontend app
 *
 * @class AnonboardApplication
 * @extends Ember.Application
 * @public
 */
const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  customEvents: {
    paste: "paste",
    cut: "cut"
  },
})

loadInitializers(App, config.modulePrefix)

export default App
