import Component     from 'ember-component'
import injectService from 'ember-service/inject'
import computed      from 'ember-computed-decorators'

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
   * Class names of the component
   *
   * @property {string[]} classNames
   * @default [ 'navbar', 'navbar-default' ]
   * @public
   */
  classNames: [ 'navbar', 'navbar-default' ],

  /**
   * Navigation service
   *
   * @property {NavigationService} navigation
   * @public
   */
  navigation: injectService(),

  /**
   * Maximum number of entries displayed in the navigation
   *
   * @property {Number} maxDisplayedEntries
   * @default 5
   * @public
   */
  maxDisplayedEntries: 5,

  /**
   * The entries which are displayed in the navigation
   *
   * @property {Topic[]} displayedEntries
   * @public
   */
  @computed('navigation.entries.[]', 'maxDisplayedEntries')
  displayedEntries(entries, max) {
    return entries.slice(0, max)
  },

  /**
   * The entries which are displayed in the dropdown
   *
   * @property {Topic[]} dropdownEntries
   * @public
   */
  @computed('navigation.entries.[]', 'maxDisplayedEntries')
  dropdownEntries(entries, max) {
    return entries.slice(max, entries.get('length'))
  }
})
