import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'
import Service                      from 'ember-service'

const navigationStub = Service.extend({
  entries: [
    { identifier: 'a', name: 'a' },
    { identifier: 'b', name: 'b' },
    { identifier: 'c', name: 'c' },
    { identifier: 'd', name: 'd' },
    { identifier: 'e', name: 'e' },
    { identifier: 'f', name: 'f' },
    { identifier: 'g', name: 'g' }
  ]
})

moduleForComponent('top-navigation', 'Integration | Component | top navigation', {
  integration: true,

  beforeEach() {
    this.register('service:navigation', navigationStub)
    this.inject.service('navigation', { as: 'navigation' })
  }
})

test('it renders', function(assert) {
  this.render(hbs`{{top-navigation}}`)

  assert.equal(this.$('ul.navbar-nav > li:not(.dropdown)').length,   5)
  assert.equal(this.$('li.dropdown > ul.dropdown-menu > li').length, 2)
})
