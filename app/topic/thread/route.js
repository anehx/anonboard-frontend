import Route from 'ember-route'
import injectService from 'ember-service/inject'

/**
 * The topic thread route
 *
 * @namespace routes
 * @class TopicThreadRoute
 * @extends Ember.Route
 * @public
 */
export default Route.extend({

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
   * Setup controller hook, set breadcrumb label
   *
   * @method setupController
   * @param {TopicThreadController} controller The topic thread controller
   * @param {Thread} model The thread model
   * @return {void}
   */
  setupController(controller, model) {
    this._super(...arguments)

    controller.set('breadCrumb', model.get('title'))
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
     * @param {string} content The comment content to add
     * @return {void}
     * @public
     */
    async addComment(content) {
      let comment = this.store.createRecord('comment', {
        thread: this.get('currentModel'),
        content
      })

      try {
        await comment.save()
      }
      catch (e) {
        this.get('notify').error(e)
      }
    }
  }
})
