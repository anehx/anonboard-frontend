import TextArea from 'ember-components/text-area'
import computed from 'ember-computed-decorators'
import $        from 'jquery'

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
   * Call At.js initialize after
   * the element was inserted
   *
   * @method didInsertElement
   * @return {void}
   * @public
   */
  didInsertElement() {
    this._super(...arguments)

    $(this.get('element')).atwho({
      at:         this.get('key'),
      data:       this.get('data'),
      displayTpl: this.get('displayTpl'),
      insertTpl:  this.get('insertTpl')
    })
  }
})
