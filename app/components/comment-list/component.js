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
export default Component.extend({
  /**
   * The content of the new comment
   *
   * @property {String} comment
   * @default ''
   * @public
   */
  comment: '',

  /**
   * Comment list component actions
   *
   * @property {Object} actions
   * @public
   */
  actions: {
    /**
     * Add comment action
     *
     * @method add
     * @return {void}
     * @public {Boolean} Whether the action succeeded
     */
    add() {
      this.sendAction('on-add', this.get('comment'))
      this.set('comment', '')

      return true
    }
  }
})
