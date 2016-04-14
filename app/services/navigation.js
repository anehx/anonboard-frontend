import Service  from 'ember-service'
import computed from 'ember-computed-decorators'

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
    let re = new RegExp(search, 'i')

    return entries.filter(e => {
      return e.get('name').search(re) >= 0
    })
  }
})
