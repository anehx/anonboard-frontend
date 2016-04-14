import Component from 'ember-component'
import service   from 'ember-service/inject'

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
  navigation: service('navigation'),

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
   * @return {void}
   * @public
   */
  click(e) {
    e.preventDefault()

    this.toggleProperty('navigation.visible')
  }
})
