import Component     from 'ember-component'
import injectService from 'ember-service/inject'

/**
 * Main content component
 *
 * @class MainContentComponent
 * @extends Ember.Component
 * @public
 */
export default Component.extend({
  /**
   * HTML tag name of the component
   *
   * @property {String} tagName
   * @default 'main'
   * @public
   */
  tagName: 'main',

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
  classNameBindings: [ 'navigation.visible:main-content--side-nav--visible' ],

  /**
   * On click event handler
   *
   * Hides navigation
   *
   * @event click
   * @param {jQuery.Event} e The jquery event
   * @return {Boolean} Whether the navigation is visible
   * @public
   */
  click(e) {
    return this.get('navigation').set('visible', false)
  }
})
