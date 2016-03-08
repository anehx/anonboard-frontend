import { moduleForModel, test } from 'ember-qunit'

moduleForModel('topic', 'Unit | Model | topic', {
  needs: [ 'model:thread' ]
})

test('it exists', function(assert) {
  let model = this.subject()
  assert.ok(!!model)
})
