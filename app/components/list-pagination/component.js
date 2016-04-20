import Component from 'ember-component'

/**
 * Component to display a pagination and a
 * per page selector for a list of models
 *
 * @class ListPaginationComponent
 * @extends Ember.Component
 * @public
 */
const ListPaginationComponent = Component.extend({
  /**
   * The limits to be selectable
   *
   * @property {Number[]} limits
   * @public
   */
  limits: [ 10, 20, 50, 100 ]
})

ListPaginationComponent.reopenClass({
  positionalParams: [ 'pagination' ]
})

export default ListPaginationComponent
