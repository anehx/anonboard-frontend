import Route   from 'ember-route'
import service from 'ember-service/inject'
import RSVP    from 'rsvp'

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
   * The model hook to fetch the thread and
   * create a new comment
   *
   * @method model
   * @param {Object} params The given parameters to search the store
   * @param {String} params.id The id of the thread
   * @return {Promise} The thread for the given id and a new comment
   * @public
   */
  async model({ id }) {
    try {
      let thread = await this.store.findRecord('thread', id, {
        include: 'user,topic,comments,comments.user,comments.referenced'
      })

      return RSVP.hash({
        comment: this.store.createRecord('comment', { thread }),
        thread
      })
    }
    catch (err) {
      return // Blargh.. This has to be this way. Sorry :)
    }
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
   * The actions for the topic thread route
   *
   * @property {Object} actions
   * @public
   */
  actions: {
    /**
     * Action to save a new comment
     *
     * @method actions.save
     * @return {void}
     * @public
     */
    async save() {
      this.set('controller.loading', true)

      try {
        await this.get('currentModel.comment').save({
          adapterOptions: {
            include: 'user'
          }
        })

        this.set('currentModel.comment', this.store.createRecord('comment', {
          thread: this.get('currentModel.thread')
        }))

        this.get('notify').success('Comment was successfully added.')
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
