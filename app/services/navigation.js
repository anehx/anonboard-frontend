import Service from 'ember-service'

import computed, {
  observes
} from 'ember-computed-decorators'

/**
 * The navigation service
 *
 * @class NavigationService
 * @extends Ember.Service
 * @public
 */
export default Service.extend({
  /**
   * Is the navigation visible?
   *
   * @property {Boolean} visible
   * @default false
   * @public
   */
  visible: false,

  /**
   * The search param to filter the
   * entries
   *
   * @property {String} search
   * @default ''
   * @public
   */
  search: '',

  /**
   * All available entries
   *
   * @property {Topic[]} entries
   * @default []
   * @private
   */
  _allEntries: [],

  /**
   * The entries filtered by the search
   * fields value
   *
   * @property {Topic[]} entries
   * @public
   */
  @computed('_allEntries', 'search')
  entries(entries, search) {
    if (!search) {
      return entries
    }

    let re = new RegExp(search, 'i')

    return entries.filter(e => {
      return e.get('name').search(re) >= 0
    })
  },

  /**
   * Clear the search field
   *
   * @method clearSearch
   * @return {void}
   * @public
   */
  clearSearch() {
    if (this.get('search')) {
      this.set('search', '')
    }
  },

  /**
   * Clear the search after closing the
   * navigation
   *
   * @method _afterClose
   * @return {void}
   * @private
   */
  @observes('visible')
  _afterClose() {
    if (!this.get('visible')) {
      this.clearSearch()
    }
  }
})
