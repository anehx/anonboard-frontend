import Component from 'ember-component'

/**
 * Component to display a list of comments
 * and a form to add a new component
 *
 * @class CommentListComponent
 * @extends Ember.Component
 * @todo
 * @public
 */
const CommentListComponent = Component.extend({
  /**
   * The comments
   *
   * @property {Comment[]} comments
   * @default []
   * @public
   */
  comments: [],

  /**
   * The currently highlighted comment
   *
   * @property {Comment} highligthed
   * @default null
   * @public
   */
  highlighted: null
})

CommentListComponent.reopenClass({
  positionalParams: [ 'comments' ]
})

export default CommentListComponent
