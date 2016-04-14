import Component from 'ember-component'
import service   from 'ember-service/inject'

import computed, {
  oneWay
} from 'ember-computed-decorators'

/**
 * The top navigation component
 *
 * @class TopNavigationComponent
 * @extends Ember.Component
 * @public
 */
export default Component.extend({
  /**
   * Tag name of the component
   *
   * @property {string} tagName
   * @default 'nav'
   * @public
   */
  tagName: 'nav',

  /**
   * Class name bindings (variable:css-class)
   *
   * @property {string[]} classNameBindings
   * @public
   */
  classNameBindings: [ 'visible:side-nav--visible' ],

  /**
   * Class names
   *
   * @property {String[]} classNames
   * @public
   */
  classNames: [ 'mui--z1' ],

  /**
   * Navigation service
   *
   * @property {NavigationService} navigation
   * @public
   */
  navigation: service('navigation'),

  /**
   * Is the side-nav visible?
   *
   * @property {Boolean} visible
   * @public
   */
  @oneWay('navigation.visible')
  visible: true,

  /**
   * The entries which are displayed in the navigation
   *
   * @property {Topic[]} entries
   * @public
   */
  @oneWay('navigation.entries')
  entries: []
})
