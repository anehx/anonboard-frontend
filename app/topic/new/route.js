import Route   from 'ember-route'
import service from 'ember-service/inject'

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
   * Notify service
   *
   * @property {EmberNotify.NotifyService} notify
   * @public
   */
  notify: service('notify'),

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

  /**
   * Topic thread route actions
   *
   * @property {Object} actions
   * @public
   */
  actions: {
    /**
     * Save a new thread
     *
     * @method actions.save
     * @return {void}
     * @public
     */
    async save() {
      let model = this.get('currentModel')

      try {
        await model.save()

        this.get('notify').success('Thread was created successfully.')

        this.transitionTo(
          'topic.thread',
          model.get('topic.identifier'),
          model.id
        )
      }
      catch (e) {
        this.get('notify').error('Ooops! Something went wrong...')
      }
    }
  }
})
