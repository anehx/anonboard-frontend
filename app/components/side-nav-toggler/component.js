import Component     from 'ember-component'
import injectService from 'ember-service/inject'

/**
 * Button to toggle the navigation
 *
 * @class SideNavTogglerComponent
 * @extends Ember.Component
 * @public
 */
export default Component.extend({
  /**
   * HTML tag name of the component
   *
   * @property {String} tagName
   * @default 'button'
   * @public
   */
  tagName: 'button',

  /**
   * Navigation service
   *
   * @property {NavigationService} navigation
   * @public
   */
  navigation: injectService(),

  /**
   * Class name bindings
   *
   * @property {String[]} classNameBindings
   * @public
   */
  classNameBindings: [ 'navigation.visible:side-nav-toggler--crossed' ],

  /**
   * On click event handler
   *
   * Toggles navigation
   *
   * @event click
   * @param {jQuery.Event} e The jquery event
   * @return {Boolean} Whether the navigation is visible
   * @public
   */
  click(e) {
    e.preventDefault()

    return this.get('navigation').toggleProperty('visible')
  }
})
