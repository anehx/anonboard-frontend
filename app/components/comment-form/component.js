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
