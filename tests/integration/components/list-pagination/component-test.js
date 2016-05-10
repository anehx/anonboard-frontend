import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('list-pagination', 'Integration | Component | list pagination', {
  integration: true
})

const DEFAULT_PAGINATION = {
  count: 100,
  pages: 20
}

test('it changes page on click', function(assert) {
  this.set('pagination', DEFAULT_PAGINATION)

  this.set('page', 1)

  this.render(hbs`{{list-pagination pagination page=page}}`)

  this.$('ul.pagination li.active').next().find('a').click()

  assert.equal(this.$('ul.pagination li.active').text(), 2)
})

test('it changes limit on click', function(assert) {
  this.set('pagination', DEFAULT_PAGINATION)

  this.set('limit', 10)
  this.set('limits', [ 10, 20 ])

  this.render(hbs`{{list-pagination pagination limit=limit limits=limits}}`)

  this.$('.per-page li.active').next().find('span').click()

  assert.equal(this.$('.per-page li.active').text(), 20)
})
