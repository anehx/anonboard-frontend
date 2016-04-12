import Route         from 'ember-route'
import injectService from 'ember-service/inject'

/**
 * The default application route
 *
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
   * @return {NavigationService} The navigation service
   * @public
   */
  setupController(controller, model) {
    this._super(...arguments)

    return controller.set('navigation', injectService())
  },

  /**
   * Before model hook, fetches navigation entries
   * and configures notifications
   *
   * @method beforeModel
   * @return {void}
   * @public
   */
  beforeModel() {
    this._configureNotifications()
    this.get('navigation').load()
  },

  /**
   * Configure the notifications
   *   - Set auto clear as default
   *   - Clear notifications after 4 seconds
   *
   * @method _configureNotifications
   * @return {void}
   * @private
   */
  _configureNotifications() {
    this.notifications.setDefaultAutoClear(true)
    this.notifications.setDefaultClearNotification(4000)
  }
})
