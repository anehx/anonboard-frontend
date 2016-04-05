import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'

moduleForComponent('comment-list', 'Integration | Component | comment list', {
  integration: true
})

test('it renders', function(assert) {
  this.set('comments', [
    {
      id:      1,
      content: 'some content'
    }
  ])

  this.set('addComment', (content) => {
    assert.ok(content)
    assert.notEqual(content, '')
  })

  this.render(hbs`{{comment-list comments=comments on-add=addComment}}`)

  assert.equal(this.$('> div').length, 1)

  this.$('form textarea').val('test comment').change()
  this.$('form button').click()
})
