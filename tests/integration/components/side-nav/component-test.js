import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'
import Service                      from 'ember-service'

const SideNavNavigationService = Service.extend({
  visible: false,

  entries: [
    { id: 1, name: 'foo', threadsLastDay: 10 },
    { id: 2, name: 'bar', threadsLastDay:  0 },
    { id: 3, name: 'baz', threadsLastDay:  1 }
  ]
})

moduleForComponent('side-nav', 'Integration | Component | side nav', {
  integration: true,

  beforeEach() {
    this.register('service:navigation', SideNavNavigationService)
    this.inject.service('navigation', { as: 'navigation' })
  }
})

test('it renders the entries', function(assert) {
  this.render(hbs`{{side-nav}}`)

  assert.equal(this.$('ul.side-nav-list > li.side-nav-list-item').length, 3)
})

test('its only visible if should', function(assert) {
  this.render(hbs`{{side-nav}}{{side-nav-toggler}}`)

  assert.notOk(this.$('nav').hasClass('side-nav--visible'))

  this.$('button').click()

  assert.ok(this.$('nav').hasClass('side-nav--visible'))
})

test('it displays labels if threadsLastDay is more than 0', function(assert) {
  this.render(hbs`{{side-nav}}`)

  let $labels = this.$('ul.side-nav-list > li.side-nav-list-item .label')

  assert.equal($labels.length, 2)

  assert.ok(this.$($labels.get(0)).prop('title').match(/\sthreads\s/))
  assert.notOk(this.$($labels.get(0)).prop('title').match(/\sthread\s/))

  assert.ok(this.$($labels.get(1)).prop('title').match(/\sthread\s/))
  assert.notOk(this.$($labels.get(1)).prop('title').match(/\sthreads\s/))
})
