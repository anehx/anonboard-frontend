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
  entries: []
})
