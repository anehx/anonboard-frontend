import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'
import moment                       from 'moment'

moduleForComponent('thread-list', 'Integration | Component | thread list', {
  integration: true
})

test('it renders', function(assert) {
  this.set('threads', [
    {
      id:    1,
      title: 'some thread',
      topic: { identifier: 'some-topic', name: 'some topic' },
      user:  { identifier: 'some-user' },
      created: moment()
    }
  ])

  this.render(hbs`{{thread-list threads=threads}}`)

  assert.equal(this.$('> div').length, 1)
})
