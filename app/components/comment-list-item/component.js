import Component from 'ember-component'

import computed, {
  equal,
  observes
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
export default Component.extend({
  comment: null,

  classNameBindings: [ 'isSelected:selected' ],

  @computed('comment.id', 'selectedComment.id')
  isSelected(cur, sel) {
    return parseInt(cur) === parseInt(sel)
  },

  @computed('comment.content')
  parts(content) {
    return content.split(/(@\d+)/g)
  },

  actions: {
    selectComment(comment) {
      this.sendAction('on-select-comment', comment)
    },

    deselectComment(comment) {
      this.sendAction('on-deselect-comment', comment)
    }
  }
})
