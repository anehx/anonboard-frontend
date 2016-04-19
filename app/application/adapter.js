import JSONAPIAdapter from 'ember-data/adapters/json-api'
import DS             from 'ember-data'

/**
 * The default application adapter
 *
 * @class ApplicationAdapter
 * @extends DS.JSONAPIAdapter
 * @public
 */
export default JSONAPIAdapter.extend({
  /**
   * The namespace for the API
   *
   * @property {String} namespace
   * @default 'api/v1'
   * @public
   */
  namespace: 'api/v1',

  /**
   * Treat HTTP 400 as a validation error
   * code response, since django-rest-framework
   * returns HTTP 400 on validation errors
   *
   * @method handleResponse
   * @param {Number} status The HTTP status code
   * @param {Object} headers The response headers
   * @param {Object} payload The payload of the response
   * @return {Object|DS.InvalidError} Response
   * @todo Import InvalidError directly if possible
   * @public
   */
  handleResponse(status, headers, payload) {
    if (status === 400 && payload.errors) {
      return new DS.InvalidError(payload.errors)
    }

    return this._super(...arguments)
  }
})
