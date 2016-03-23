import Mixin from 'ember-metal/mixin'

/**
 * Pagination controller mixin
 *
 * @class PaginationControllerMixin
 * @namespace mixins
 * @extends Ember.Mixin
 * @public
 */
export default Mixin.create({
  /**
   * Query params used for a paged and sorted list
   *
   * @property {String[]} queryParams
   * @default [ 'page', 'limit', 'sort' ]
   * @public
   */
  queryParams: [ 'page', 'limit', 'sort' ],

  /**
   * The default object limit
   *
   * @property {Number} limit
   * @default 10
   * @public
   */
  limit: 10,

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
