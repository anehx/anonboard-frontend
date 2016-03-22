import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'

moduleForComponent('thread-list-item', 'Integration | Component | thread list item', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{thread-list-item}}`)

  assert.equal(this.$().text().trim(), '')
})
