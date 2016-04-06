import Mixin from 'ember-metal/mixin'

/**
 * Pagination route mixin
 *
 * @class PaginationRouteMixin
 * @extends Ember.Mixin
 * @public
 */
export default Mixin.create({
  /**
   * The name of the model to fetch
   *
   * @property {String} modelName
   * @default null
   * @public
   */
  modelName: null,

  /**
   * Query params used for a paged and sorted list
   *
   * @property {Object} queryParams
   * @public
   */
  queryParams: {
    limit: { refreshModel: true },
    page:  { refreshModel: true },
    sort:  { refreshModel: true }
  },

  /**
   * Model hook to fetch paged / sorted data
   *
   * @method model
   * @param {Object} params       Query params of this route
   * @param {Number} params.limit How many records to display
   * @param {Number} params.page  Which page to display
   * @param {String} params.sort  The sort fields and order
   * @return {Promise} The resolved data
   * @public
   */
  model(params) {
    let { limit, page, sort } = params

    params.limit = undefined
    params.page  = undefined
    params.sort  = undefined

    return this.store.query(this.get('modelName'), {
      page,
      sort,
      'page_size': limit,
      'filter':    params
    })
  }
})
