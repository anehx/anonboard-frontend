import Route from 'ember-route'

/**
 * The topic route
 *
 * @namespace routes
 * @class TopicRoute
 * @extends Ember.Route
 * @public
 */
export default Route.extend({
  /**
   * Model hook to fetch the topic and the threads of the topic
   *
   * @method model
   * @param {Object} params The given parameters to search the store
   * @param {String} params.identifier The identifier of the topic
   * @return {Topic} The topic
   * @public
   */
  async model({ identifier }) {
    let [ topic ] = await this.store.queryRecord('topic', { filter: { identifier } })

    return topic
  },

  /**
   * Setup controller hook, set breadcrumb label
   *
   * @method setupController
   * @param {TopicController} controller The topic controller
   * @param {Topic} model The topic model
   * @return {void}
   */
  setupController(controller, model) {
    this._super(...arguments)

    controller.set('breadCrumb', model.get('name'))
  }
})
