import EmberRouter from 'ember-router'
import config      from './config/environment'

/**
 * The default router
 *
 * @namespace application
 * @class Router
 * @extends Ember.Router
 * @public
 */
const Router = EmberRouter.extend({

  /**
   * Location type to route with
   *
   * @property {string} location
   * @public
   */
  location: config.locationType
})

Router.map(function() {
  this.route('topic', { path: '/t/:identifier' }, function() {
    this.route('thread', { path: '/:id' })
    this.route('new')
  })
})

export default Router
