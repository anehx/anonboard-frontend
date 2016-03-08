import { moduleForModel, test } from 'ember-qunit'

moduleForModel('thread', 'Unit | Model | thread', {
  needs: [ 'model:user', 'model:comment', 'model:topic' ]
})

test('it exists', function(assert) {
  let model = this.subject()
  assert.ok(!!model)
})
