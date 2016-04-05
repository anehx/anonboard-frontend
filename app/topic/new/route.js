import Route from 'ember-route'

/**
 * Route to create new threads
 * in a certain topic
 *
 * @class TopicThreadNewRoute
 * @extends {Ember.Route}
 * @public
 */
export default Route.extend({
  /**
   * Model hook, create a new thread for
   * the topic we are in
   *
   * @method model
   * @return {Thread} The new thread
   * @public
   */
  model() {
    return this.store.createRecord('thread', { topic: this.modelFor('topic') })
  }
})
