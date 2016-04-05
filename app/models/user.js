import Model from 'ember-data/model'
import attr  from 'ember-data/attr'

/**
 * The user model
 *
 * @class User
 * @extends DS.Model
 * @public
 */
export default Model.extend({
  /**
   * The identifier of the user
   *
   * This is a generated sha256 hash
   * of the users IP and UserAgent
   *
   * @property {String} identifier
   * @public
   */
  identifier: attr('string')
})
