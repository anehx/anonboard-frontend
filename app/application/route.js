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
   *
   * @method beforeModel
   * @return {void}
   * @public
   */
  beforeModel() {
    this.get('navigation').set(
      '_allEntries',
      this.store.findAll('topic')
    )
  }
})
