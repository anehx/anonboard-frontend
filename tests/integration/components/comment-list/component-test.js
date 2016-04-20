import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'

moduleForComponent('comment-list', 'Integration | Component | comment list', {
  integration: true
})

test('it renders', function(assert) {
  this.set('comments', [
    { id: 1, content: 'foo', referenced: [], isNew: false },
    { id: 2, content: 'bar', referenced: [], isNew: false }
  ])

  this.render(hbs`{{comment-list comments}}`)

  assert.ok(this)
})
