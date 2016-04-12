import Route           from 'ember-route'
import { formatError } from 'anonboard/utils/error'

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
  },

  actions: {
    async save() {
      let model = this.get('currentModel')

      try {
        await model.save()

        this.notifications.success('Thread was created successfully.')

        this.transitionTo(
          'topic.thread',
          model.get('topic.identifier'),
          model
        )
      }
      catch (e) {
        this.notifications.error(formatError(e))
      }
    }
  }
})
