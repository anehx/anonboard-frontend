import Route           from 'ember-route'
import { formatError } from 'anonboard/utils/error'

/**
 * Route to display a single thread with
 * it's comment and functionality to create
 * a new comment
 *
 * @class TopicThreadRoute
 * @extends Ember.Route
 * @public
 */
export default Route.extend({
  /**
   * The model hook to fetch the thread
   *
   * @method model
   * @param {Object} params The given parameters to search the store
   * @param {String} params.id The id of the thread
   * @return {Thread} The thread for the given id
   * @public
   */
  async model({ id }) {
    let [ thread ] = await this.store.queryRecord('thread', { filter: { id }, include: 'topic,comments' })

    if (!thread) {
      this.notifications.error(`404: Thread with ID '${id}' not found.`)

      this.transitionTo('topic', this.modelFor('topic'))
    }

    return thread
  },

  /**
   * The actions for the topic thread route
   *
   * @property {Object} actions
   * @public
   */
  actions: {
    /**
     * Action to add a new comment
     *
     * @method addComment
     * @param {String} content The comment content to add
     * @return {void}
     * @public
     */
    async addComment(content) {
      try {
        let comment = this.store.createRecord('comment', {
          thread: this.get('currentModel'),
          content
        })

        await comment.save()

        this.notifications.success('Comment was successfully added.')
      }
      catch (e) {
        this.notifications.error(formatError(e))
      }
    }
  }
})
