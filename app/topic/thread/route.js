import Route   from 'ember-route'
import service from 'ember-service/inject'

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
  notify: service('notify'),

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
    return this.store.findRecord('thread', id, { include: 'user,topic,comments,comments.user' })
  },

  /**
   * Transition back to topic and fire a notification
   * if no model is given
   *
   * @method afterModel
   * @param {Thread} model The model of this route
   * @return {void}
   * @public
   */
  afterModel(model) {
    if (!model) {
      this.get('notify').error('Thread not found!')

      this.transitionTo('topic', this.modelFor('topic'))
    }
  },

  /**
   * Parse the comment content and filter
   * referenced comments out of it
   *
   * @method _getReferencedFromContent
   * @param {String} content The content to parse
   * @return {Comment[]} The referenced comments
   * @private
   */
  _getReferencedFromContent(content) {
    let match = content.match(/(@\d+)/g)

    if (!match) {
      return []
    }

    let ids = match.map(i => i.replace('@', ''))

    return this.get('currentModel.comments').filter(c => ids.includes(c.id))
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
     * @method actions.addComment
     * @param {String} content The comment content to add
     * @return {void}
     * @public
     */
    async addComment(content) {
      try {
        let referenced = this._getReferencedFromContent(content)

        let comment = this.store.createRecord('comment', {
          thread: this.get('currentModel'),
          referenced,
          content
        })

        await comment.save()

        this.get('notify').success('Comment was successfully added.')
      }
      catch (e) {
        this.get('notify').error('Ooops! Something went wrong...')
      }
    }
  }
})
