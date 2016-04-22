import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'

moduleForComponent('comment-list-item', 'Integration | Component | comment list item', {
  integration: true
})

test('it renders', function(assert) {
  this.set('comment', {
    id: 1,
    content: 'test',
    thread: { comments: [] }
  })

  this.render(hbs`{{comment-list-item comment}}`)

  assert.notEqual(this.$().text().trim(), '')
})
