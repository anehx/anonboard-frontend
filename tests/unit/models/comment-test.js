import { moduleForModel, test } from 'ember-qunit'

moduleForModel('comment', 'Unit | Model | comment', {
  needs: [ 'model:user', 'model:thread' ]
})

test('it exists', function(assert) {
  let model = this.subject()
  assert.ok(!!model)
})
