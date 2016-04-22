import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('comment-content-part', 'Integration | Component | comment content part', {
  integration: true
})

test('it renders', function(assert) {
  this.set('part', '@18')
  this.set('comment', {
    content: 'foo bar @18',
    thread: { comments: [ { id: 18 } ] }
  })

  this.set('enter', (comment) => {
    assert.equal(comment.id, 18)
  })

  this.render(hbs`{{comment-content-part part
    comment=comment
    on-mouse-enter=enter
  }}`)

  this.$('span').mouseenter()

  assert.equal(this.$().text().trim(), '@18')
})
