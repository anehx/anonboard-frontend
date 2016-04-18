import Component from 'ember-component'

import computed, {
  equal
} from 'ember-computed-decorators'

/**
 * Component to display a single comment
 * in a list of comments
 *
 * @class CommentListItemComponent
 * @extends Ember.Component
 * @todo
 * @public
 */
const CommentListItemComponent = Component.extend({
  /**
   * The comment
   *
   * @property {Comment} comment
   * @default null
   * @public
   */
  comment: null,

  /**
   * Class name bindings
   *
   * @property {String[]} classNameBindings
   * @public
   */
  classNameBindings: [ 'highlighted' ],

  /**
   * Whether the item is currently highlighted
   * or not
   *
   * @property {Boolean} highlighted
   * @public
   */
  @computed('comment.id', 'current.id')
  highlighted(own, current) {
    return parseInt(own, 10) === parseInt(current, 10)
  },

  /**
   * The parts of the comment content
   *
   * @property {String[]} parts
   * @public
   */
  @computed('comment.content')
  parts(content) {
    return content.split(/(@\d+)/g)
  }
})

CommentListItemComponent.reopenClass({
  positionalParams: [ 'comment' ]
})

export default CommentListItemComponent
