import Component from 'ember-component'

/**
 * User alias component
 *
 * Show 'Anonymous' and on hover a popover containing
 * the users identifier
 *
 * @class UserAliasComponent
 * @extends Ember.Component
 * @public
 */
const UserAliasComponent = Component.extend({
  /**
   * HTML tag name of the component
   *
   * @property {String} tagName
   * @default 'span'
   * @public
   */
  tagName: 'span',

  /**
   * The user to alias
   *
   * @property {User} user
   * @default null
   * @public
   */
  user: null,

  /**
   * Is the popover visible?
   *
   * @property {Boolean} popoverVisible
   * @default false
   * @public
   */
  popoverVisible: false,

  /**
   * Show popover on mouse enter
   *
   * @event mouseEnter
   * @param {jQuery.Event} e The event
   * @return {void}
   * @public
   */
  mouseEnter(e) {
    this.set('popoverVisible', true)
  },

  /**
   * Hide popover on mouse enter
   *
   * @event mouseLeave
   * @param {jQuery.Event} e The event
   * @return {void}
   * @public
   */
  mouseLeave(e) {
    this.set('popoverVisible', false)
  }
})

UserAliasComponent.reopenClass({
  positionalParams: [ 'user' ]
})

export default UserAliasComponent
