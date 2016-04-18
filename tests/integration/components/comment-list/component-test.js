import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'

moduleForComponent('comment-list', 'Integration | Component | comment list', {
  integration: true
})

test('it renders', function(assert) {
  this.set('thread', {
    id: 1,
    comments: [
      { id: 1, content: 'foo', referenced: [], isNew: false },
      { id: 2, content: 'bar', referenced: [], isNew: false }
    ]
  })

  this.set('addComment', (content) => {
    assert.ok(content)
    assert.notEqual(content, '')
  })

  this.render(hbs`{{comment-list thread=thread on-add=addComment}}`)

  assert.equal(this.$('> div > div').length, 3) // one more because of the pagination

  this.$('form textarea').val('test comment').change()
  this.$('form button').click()
})
