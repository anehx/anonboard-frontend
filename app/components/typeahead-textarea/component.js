import TextArea from 'ember-components/text-area'
import $        from 'jquery'

import computed, {
  observes
} from 'ember-computed-decorators'

/**
 * Textarea with At.js typeahead support
 *
 * @class TypeaheadTextareaComponent
 * @see https://github.com/ichord/At.js/wiki/Base-Document
 * @extends Ember.TextArea
 * @public
 */
export default TextArea.extend({
  /**
   * The key to trigger the
   * typeahead on
   *
   * @property {String} key
   * @default '@'
   * @public
   */
  key: '@',

  /**
   * The data to display in the
   * typeahead popup
   *
   * @property {Object[]} data
   * @default []
   * @public
   */
  data: [],

  /**
   * The template to use in the
   * typeahead popup
   *
   * @property {String} displayTpl
   * @default '<li>${label}</li>'
   * @public
   */
  displayTpl: '<li>${label}</li>',

  /**
   * The template to insert into
   * the actual textarea
   *
   * @property {String} insertTpl
   * @public
   */
  @computed('key')
  insertTpl(key) {
    return `${key}\$\{value\}`
  },

  /**
   * Initialize At.js after inserting
   * the component
   *
   * @method didInsertElement
   * @return {void}
   * @public
   */
  didInsertElement() {
    this._super(...arguments)

    this._initializeAtwho()
  },

  /**
   * Destroy At.js before destroying
   * the component
   *
   * @method willDestroyElement
   * @return {void}
   * @public
   */
  willDestroyElement() {
    this._super(...arguments)

    this._destroyAtwho()
  },

  /**
   * Initialize At.js
   *
   * @method _initializeAtwho
   * @return {void}
   * @private
   */
  _initializeAtwho() {
    $(this.get('element')).atwho({
      at:         this.get('key'),
      data:       this.get('data'),
      displayTpl: this.get('displayTpl'),
      insertTpl:  this.get('insertTpl'),
      limit:      this.get('data.length')
    })
  },

  /**
   * Destroy At.js
   *
   * @method _destroyAtwho
   * @return {void}
   * @private
   */
  _destroyAtwho() {
    $(this.get('element')).atwho('destroy')
  },

  /**
   * Redraw At.js on data changes
   *
   * @method _redrawAtwho
   * @return {void}
   * @private
   */
  @observes('data')
  _redrawAtwho() {
    this._destroyAtwho()
    this._initializeAtwho()
  }
})
