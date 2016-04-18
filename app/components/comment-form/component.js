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
export default Component.extend({
  /**
   * Class names
   *
   * @property {String[]} classNames
   * @public
   */
  classNames: [ 'mui-row' ],

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
   * Content of the comment
   *
   * @property {String} comment
   * @default ''
   * @public
   */
  comment: '',

  /**
   * Chars left to type in the input
   *
   * @property {Number} charsLeft
   * @public
   */
  @computed('comment.length', 'maxLength')
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
  @computed('comments')
  data(comments) {
    return comments.map(c => {
      return { value: c.id, label: `Comment ${c.id}` }
    })
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

      this.set('comment', '')
    }
  }
})
