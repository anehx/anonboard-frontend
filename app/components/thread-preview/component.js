import Component from 'ember-component'

/**
 * Component to display a toggable
 * preview of a thread
 *
 * @class ThreadPreviewComment
 * @extends Ember.Component
 * @public
 */
export default Component.extend({
  /**
   * Is the preview body visible?
   *
   * @property {Boolean} visible
   * @default false
   * @public
   */
  visible: false,

  /**
   * Thread preview actions
   *
   * @property {Object} actions
   * @public
   */
  actions: {
    /**
     * Toggle the visible flag
     *
     * @method actions.toggleVisible
     * @return {void}
     * @public
     */
    toggleVisible() {
      this.toggleProperty('visible')
    }
  }
})
