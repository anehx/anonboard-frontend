import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'

moduleForComponent('comment-list-item', 'Integration | Component | comment list item', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{comment-list-item}}`)

  assert.equal(this.$().text().trim(), '')
})
