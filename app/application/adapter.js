import JSONAPIAdapter from 'ember-data/adapters/json-api'

/**
 * The default application adapter
 *
 * @namespace adapters
 * @class ApplicationAdapter
 * @extends DS.JSONAPIAdapter
 * @public
 */
export default JSONAPIAdapter.extend({
  /**
   * The API namespace
   *
   * @property {string} namespace
   * @default 'api/v1'
   * @public
   */
  namespace: 'api/v1'
})
