import Route   from 'ember-route'
import service from 'ember-service/inject'

/**
 * The topic route
 *
 * @class TopicRoute
 * @extends Ember.Route
 * @public
 */
export default Route.extend({
  /**
   * Notify service
   *
   * @property {EmberNotify.NotifyService} notify
   * @public
   */
  notify: service('notify'),

  /**
   * Model hook to fetch the topic and the threads of the topic
   *
   * @method model
   * @param {Object} params The given parameters to search the store
   * @param {String} params.identifier The identifier of the topic
   * @return {Topic} The topic to the given identifier
   * @public
   */
  async model({ identifier }) {
    let [ topic ] = await this.store.queryRecord('topic', { filter: { identifier } })

    return topic
  },

  /**
   * Transition back to index and fire a notification
   * if no model is given
   *
   * @method afterModel
   * @param {Topic} model The model of this route
   * @return {void}
   * @public
   */
  afterModel(model) {
    if (!model) {
      this.get('notify').error('Topic not found!')

      this.transitionTo('index')
    }
  }
})
