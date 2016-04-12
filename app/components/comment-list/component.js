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
   * Comment list component actions
   *
   * @property {Object} actions
   * @public
   */
  actions: {
    /**
     * Add comment action
     *
     * @method addComment
     * @param {Comment} comment The comment to be added
     * @return {void}
     */
    addComment(comment) {
      this.sendAction('on-add-comment', comment)
    }
  }
})
