import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('comment-form', 'Integration | Component | comment form', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{comment-form}}`)

  assert.notEqual(this.$().text().trim(), '')
})
