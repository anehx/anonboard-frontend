import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('top-header', 'Integration | Component | top header', {
  integration: true
})

test('it renders', function(assert) {
  this.render(hbs`{{top-header title='foo' sub='bar'}}`)

  assert.equal(this.$('h1').text(), 'foo')
  assert.equal(this.$('h2').text(), 'bar')

  this.render(hbs`
    {{#top-header title='foo' sub='bar'}}
      <button>some button</button>
    {{/top-header}}
  `)

  assert.equal(this.$('h1').text(), 'foo')
  assert.equal(this.$('h2').text(), 'bar')
  assert.equal(this.$('button').length, 1)
})
