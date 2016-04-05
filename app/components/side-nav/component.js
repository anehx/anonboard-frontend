import Component            from 'ember-component'
import injectService        from 'ember-service/inject'
import computed, { oneWay } from 'ember-computed-decorators'

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
   * @default [ 'mui--z1' ]
   * @public
   */
  classNames: [ 'mui--z1' ],

  /**
   * Navigation service
   *
   * @property {NavigationService} navigation
   * @public
   */
  navigation: injectService(),

  /**
   * Is the side-nav visible?
   *
   * @property {Boolean} visible
   * @public
   */
  @oneWay('navigation.visible') visible: true,

  /**
   * Search string to filter entries
   *
   * @property {String} search
   * @public
   */
  search: null,

  /**
   * The entries which are displayed in the navigation
   * filtered by the search string
   *
   * @property {Topic[]} displayedEntries
   * @public
   */
  @computed('navigation.entries.[]', 'search')
  entries(entries, search) {
    if (!search) {
      return entries
    }

    let re = new RegExp(search, 'i')

    return entries.filter(e => {
      return e.get('name').search(re) >= 0
    })
  }
})
