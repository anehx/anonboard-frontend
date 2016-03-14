import Route from 'ember-route'

/**
 * The topic thread route
 *
 * @namespace routes
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
    let thread = await this.store.findRecord('thread', id, { include: 'topic,comments' })

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
     * @return {void}
     * @public
     */
    addComment() {
      let content = this.get('controller.comment')

      let comment = this.store.createRecord('comment', {
        thread: this.get('currentModel'),
        content
      })

      comment.save()

      this.set('controller.comment', undefined)
    }
  }
})
