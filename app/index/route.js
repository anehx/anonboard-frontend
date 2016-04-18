import Route from 'ember-route'

/**
 * The home route which displays
 * the last 10 overall threads
 *
 * @class IndexRoute
 * @extends Ember.Route
 * @public
 */
export default Route.extend({
  /**
   * Model hook, fetch the last 10
   * overall threads
   *
   * @method model
   * @return {Thread[]} The last 10 threads
   * @public
   */
  model() {
    return this.store.query('thread', {
      filter: { sort: '-created', 'page_size': 10 },
      include: 'topic,user,comments'
    })
  }
})
