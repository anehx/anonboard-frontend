import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('comment-form', 'Integration | Component | comment form', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{comment-form}}`)

  assert.notEqual(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#comment-form}}
      template block text
    {{/comment-form}}
  `)

  assert.notEqual(this.$().text().trim(), 'template block text')
})
