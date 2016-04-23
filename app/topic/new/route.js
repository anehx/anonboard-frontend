import Route   from 'ember-route'
import service from 'ember-service/inject'
import Thread  from 'anonboard/models/thread'

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
    //return Thread.create(getOwner(this).ownerInjection(), { topic: this.modelFor('topic') })
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
      this.set('controller.loading', true)

      try {
        let model = this.get('currentModel')

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
      finally {
        this.set('controller.loading', false)
      }
    }
  }
})
