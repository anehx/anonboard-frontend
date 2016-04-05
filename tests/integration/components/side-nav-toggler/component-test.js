import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('side-nav-toggler', 'Integration | Component | side nav toggler', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{side-nav-toggler}}`)

  assert.equal(this.$().text().trim(), '')
})
