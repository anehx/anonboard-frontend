import Service       from 'ember-service'
import injectService from 'ember-service/inject'

/**
 * The navigation service
 *
 * @class NavigationService
 * @extends Ember.Service
 * @public
 */
export default Service.extend({
  /**
   * The store which holds the desired objects
   *
   * @property {Ember.Store} store
   * @public
   */
  store: injectService(),

  /**
   * Is the navigation visible?
   *
   * @property {Boolean} visible
   * @default false
   * @public
   */
  visible: false,

  /**
   * The navigation entries
   *
   * @property {Topic[]} entries
   * @public
   */
  entries: [],

  /**
   * Hook to load the entries from the store
   *
   * @method load
   * @return {Topic[]} The loaded entries
   * @public
   */
  load() {
    return this.set('entries', this.get('store').findAll('topic'))
  }
})
