import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('main-content', 'Integration | Component | main content', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{main-content}}`)

  assert.equal(this.$().text().trim(), '')

  this.render(hbs`
    {{#main-content}}
      template block text
    {{/main-content}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
