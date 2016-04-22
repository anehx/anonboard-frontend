import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'
import $                            from 'jquery'

moduleForComponent('user-alias', 'Integration | Component | user alias', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{user-alias}}`)

  assert.equal(this.$().text().trim(), 'Anonymous')
})

test('it toggles the popover on click', function(assert) {
  this.render(hbs`{{user-alias}}`)

  this.$('span').click()

  assert.equal($('.ember-tether .popover').length, 1)

  this.$('span').click()

  assert.equal($('.ember-tether .popover').length, 0)
})

test('it closes the popover on mouse leave', function(assert) {
  this.render(hbs`{{user-alias popoverVisible=true}}`)

  this.$('span').mouseleave()

  assert.equal($('.ember-tether .popover').length, 0)
})
