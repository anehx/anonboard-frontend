import Controller                from 'ember-controller'
import PaginationControllerMixin from 'anonboard/mixins/pagination-controller'

/**
 * Topic index controller
 *
 * @class TopicIndexController
 * @namespace controllers
 * @extends Ember.Controller
 * @uses PaginationControllerMixin
 * @public
 */
export default Controller.extend(PaginationControllerMixin, {
  /**
   * The default sorting order
   *
   * @property {String} sort
   * @default '-created'
   * @public
   */
  sort: '-created'
})
