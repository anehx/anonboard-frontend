import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('thread-list-pagination', 'Integration | Component | thread list pagination', {
  integration: true
})

test('it renders', function(assert) {
  this.set('pagination', {
    count: 100,
    page:  10,
    pages: 20
  })

  this.render(hbs`{{thread-list-pagination pagination=pagination}}`)

  assert.equal(this.$('ul.pagination li').length, 10) // this has to be 10 to be sure it truncates
})
