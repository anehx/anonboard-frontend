import Route                from 'ember-route'
import PaginationRouteMixin from 'anonboard/mixins/pagination-route'
import injectService        from 'ember-service/inject'

/**
 * Topic index route
 *
 * @class TopicIndexRoute
 * @extends Ember.Route
 * @uses PaginationRouteMixin
 * @public
 */
export default Route.extend(PaginationRouteMixin, {
  /**
   * The name of the model to fetch
   *
   * @property {String} modelName
   * @default 'thread'
   * @public
   */
  modelName: 'thread',

  /**
   * Navigation service
   *
   * @property {NavigationService}
   * @public
   */
  navigation: injectService(),

  /**
   * Before model hook, hide navigation
   * after every model change
   *
   * @method beforeModel
   * @return {Boolean} Whether the navigation is visible
   * @public
   */
  beforeModel() {
    this._super(...arguments)

    return this.get('navigation').set('visible', false)
  },

  /**
   * Model hook to fetch threads for a topic
   *
   * @method model
   * @param {Object} params The query params
   * @param {Number} params.limit How many vehicle-checks should be queried
   * @param {Number} params.page  The page to fetch
   * @param {String} params.sort  Sorting direction
   * @return {Thread[]} A list of threads
   * @public
   */
  async model(params) {
    let { limit, page, sort } = params

    params.limit = undefined
    params.page  = undefined
    params.sort  = undefined

    let topic = await this.modelFor('topic')

    return this.store.query(this.get('modelName'), {
      page,
      sort,
      'page_size': limit,
      'filter':    { topic: topic.get('id') },
      'include':   'user'
    })
  }
})
