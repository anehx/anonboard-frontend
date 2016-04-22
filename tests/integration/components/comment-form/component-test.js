import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('comment-form', 'Integration | Component | comment form', {
  integration: true
})

test('it renders and submits', function(assert) {
  this.set('comment', { content: '' })

  this.set('submit', (comment) => {
    assert.deepEqual(comment, { content: 'foobar' })
  })

  this.render(hbs`{{comment-form comment on-submit=(action submit)}}`)

  this.$('textarea').val('foobar').change()

  this.$('button').click()
})
