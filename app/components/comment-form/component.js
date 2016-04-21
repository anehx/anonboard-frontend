import Component from 'ember-component'
import computed  from 'ember-computed-decorators'

const MAX_COMMENT_LENGTH = 140

/**
 * Component to display a form
 * for creating a comment
 *
 * @class CommentFormComponent
 * @extends Ember.Component
 * @public
 */
const CommentFormComponent = Component.extend({
  /**
   * Class names
   *
   * @property {String[]} classNames
   * @public
   */
  classNames: [ 'mui-row' ],

  /**
   * The comment to create
   *
   * @property {Comment} comment
   * @default null
   * @public
   */
  comment: null,

  /**
   * The comments which we can mention
   *
   * @property {Comment[]} comments
   * @default []
   * @public
   */
  comments: [],

  /**
   * Max length of a comment
   *
   * @property {Number} maxLength
   * @public
   */
  maxLength: MAX_COMMENT_LENGTH,

  /**
   * Chars left to type in the input
   *
   * @property {Number} charsLeft
   * @public
   */
  @computed('comment.content.length', 'maxLength')
  charsLeft(len, max) {
    return max - len
  },

  /**
   * The data to show in the typeahead
   * popup
   *
   * @property {Object[]} data
   * @public
   */
  @computed('comments', 'comment.content')
  data(comments, content) {
    return comments.reduce((data, c) => {
      if (!this.get('_referenced').mapBy('id').includes(c.id) && !c.get('isNew')) {
        data.push({ value: c.id, label: `Comment ${c.id}` })
      }

      return data
    }, [])
  },

  /**
   * The referenced comments
   *
   * @property {Comment[]} _referenced
   * @private
   */
  @computed('comment.content')
  _referenced(content) {
    let match = content.match(/(@\d+)/g)

    if (!match) {
      return []
    }

    let ids = match.map(i => i.replace('@', ''))

    return this.get('comments').filter(c => ids.includes(c.id))
  },

  /**
   * Actions of the comment form
   *
   * @property {Object} actions
   * @public
   */
  actions: {
    /**
     * Action to add the comment
     *
     * @method actions.add
     * @return {void}
     * @public
     */
    add() {
      this.sendAction('on-submit', this.get('comment'))
    }
  }
})

CommentFormComponent.reopenClass({
  positionalParams: [ 'comment' ]
})

export default CommentFormComponent
