import Service       from 'ember-service'
import injectService from 'ember-service/inject'

/**
 * The navigation service
 *
 * @namespace services
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
   * @return {void}
   * @public
   */
  load() {
    this.set('entries', this.get('store').findAll('topic'))
  }
})
