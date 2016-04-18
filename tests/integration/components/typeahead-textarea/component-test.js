import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('typeahead-textarea', 'Integration | Component | typeahead textarea', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{typeahead-textarea}}`)

  assert.equal(this.$().text().trim(), '')
})
