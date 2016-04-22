import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('thread-body', 'Integration | Component | thread body', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{thread-body}}`)

  assert.notEqual(this.$().text().trim(), '')
})
