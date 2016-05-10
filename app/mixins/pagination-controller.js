import Mixin from 'ember-metal/mixin'

/**
 * Pagination controller mixin
 *
 * @class PaginationControllerMixin
 * @extends Ember.Mixin
 * @public
 */
export default Mixin.create({
  /**
   * Query params used for a paged and sorted list
   *
   * @property {String[]} queryParams
   * @public
   */
  queryParams: [ 'page', 'limit', 'sort' ],

  /**
   * The default object limit
   *
   * @property {Number} limit
   * @default 20
   * @public
   */
  limit: 20,

  /**
   * The default sorting order
   *
   * @property {String} sort
   * @default ''
   * @public
   */
  sort: '',

  /**
   * The default page
   *
   * @property {Number} page
   * @default 1
   * @public
   */
  page: 1
})
