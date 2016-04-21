import Component from 'ember-component'
import computed  from 'ember-computed-decorators'

/**
 * User alias component
 *
 * Show 'Anonymous' and on click a popover containing
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
   * Bind title to property
   *
   * @property {String[]} attributeBindings
   * @public
   */
  attributeBindings: [ 'title' ],

  /**
   * The title of the component
   *
   * @property {String} title
   * @public
   */
  @computed('popoverVisible')
  title(visible) {
    let verb = visible ? 'hide' : 'show'

    return `Click to ${verb} users identifier`
  },

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
   * Toggle popover on click
   *
   * @event click
   * @param {jQuery.Event} e The event
   * @return {void}
   * @public
   */
  click(e) {
    this.toggleProperty('popoverVisible')
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
