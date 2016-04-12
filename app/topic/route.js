import Route from 'ember-route'

/**
 * The topic route
 *
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
  async model({ identifier }, transition) {
    let [ topic ] = await this.store.queryRecord('topic', { filter: { identifier } })

    if (!topic) {
      this.notifications.error(`404: Topic with identifier '${identifier}' not found.`)

      this.transitionTo('index')
    }

    return topic
  }
})
