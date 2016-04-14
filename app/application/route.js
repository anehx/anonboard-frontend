import Route   from 'ember-route'
import service from 'ember-service/inject'

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
  navigation: service('navigation'),

  /**
   * Setup controller hook
   *
   * @method setupController
   * @param {ApplicationController} controller The controller for the route
   * @param {*} model The model for the route
   * @return {void}
   * @public
   */
  setupController(controller, model) {
    this._super(...arguments)

    controller.set('navigation', service('navigation'))
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

    this.get('navigation').set(
      '_allEntries',
      this.store.findAll('topic')
    )
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
