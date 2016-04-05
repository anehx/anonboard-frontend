import JSONAPIAdapter from 'ember-data/adapters/json-api'

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
  namespace: 'api/v1'
})
