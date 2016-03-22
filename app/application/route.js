import Route         from 'ember-route'
import injectService from 'ember-service/inject'

/**
 * The default application route
 *
 * @namespace routes
 * @class ApplicationRoute
 * @extends Ember.Route
 * @public
 */
export default Route.extend({
  /**
   * Navigation service
   *
   * @property {NavigationService} navigation
   * @public
   */
  navigation: injectService(),

  /**
   * Setup controller hook
   *
   * @method setupController
   * @param {ApplicationController} controller The controller for the route
   * @param {Object} model The model for the route
   * @return {void}
   * @public
   */
  setupController(controller, model) {
    this._super(...arguments)

    controller.set('navigation', injectService())
  },

  /**
   * Before model hook, fetches navigation entries
   *
   * @method beforeModel
   * @return {void}
   * @public
   */
  beforeModel() {
    this.get('navigation').load()
  }
})
