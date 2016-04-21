import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'
import Service                      from 'ember-service'

const SideNavTogglerNavigationService = Service.extend({
  visible: false
})

moduleForComponent('side-nav-toggler', 'Integration | Component | side nav toggler', {
  integration: true,

  beforeEach() {
    this.register('service:navigation', SideNavTogglerNavigationService)
    this.inject.service('navigation', { as: 'navigation' })
  }
})

test('it changes navigation visible property on click', function(assert) {
  this.render(hbs`{{side-nav-toggler}}`)

  this.$('button').click()

  assert.ok(this.$('button').hasClass('side-nav-toggler--crossed'))

  this.$('button').click()

  assert.notOk(this.$('button').hasClass('side-nav-toggler--crossed'))
})
