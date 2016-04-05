import Route         from 'ember-route'
import injectService from 'ember-service/inject'

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
   * Notify service
   *
   * @property {EmberNotify.NotifyService} notify
   * @public
   */
  notify: injectService(),

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
     * @return {Boolean} Whether the comment is saved
     * @public
     */
    async addComment(content) {
      let comment = this.store.createRecord('comment', {
        thread: this.get('currentModel'),
        content
      })

      try {
        await comment.save()

        this.get('notify').success('Comment added')
      }
      catch (e) {
        this.get('notify').error(e)

        return false
      }
      return true
    }
  }
})
