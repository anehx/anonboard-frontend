import Transform from 'ember-data/transform'
import moment    from 'moment'

/**
 * The moment transform
 *
 * Transforms datetime strings to
 * moment objects
 *
 * @namespace transforms
 * @class MomentTransform
 * @extends DS.Transform
 * @public
 */
export default Transform.extend({
  /**
   * Deserialize datetime strings to moment objects
   *
   * @method deserialize
   * @param {string} serialized The string to convert
   * @return {moment} The deserialized date
   * @public
   */
  deserialize(serialized) {
    return serialized ? moment(serialized) : null
  },

  /**
   * Serialize moment objects to datetime strings
   *
   * @method serialize
   * @param {moment} deserialized The moment object to convert
   * @return {string} The serialized date
   * @public
   */
  serialize(deserialized) {
    return deserialized && deserialized.isValid() ? deserialized.toISOString() : null
  }
})
