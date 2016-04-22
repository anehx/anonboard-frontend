import { moduleForComponent, test } from 'ember-qunit'
import hbs                          from 'htmlbars-inline-precompile'
import $                            from 'jquery'

moduleForComponent('typeahead-textarea', 'Integration | Component | typeahead textarea', {
  integration: true
})

test('it displays suggestions', function(assert) {
  this.set('data', [
    { value: 'foo', label: 'Test Foo' },
    { value: 'bar', label: 'Test bar' }
  ])

  this.render(hbs`{{typeahead-textarea key='@' data=data}}`)

  this.$('textarea').val('@f').change()

  assert.ok($('.atwho-container .atwho-view'))
})
