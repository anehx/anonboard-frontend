import Ember from 'ember'
import PaginationControllerMixin from 'anonboard/mixins/pagination-controller'
import { module, test } from 'qunit'

module('Unit | Mixin | pagination controller')

// Replace this with your real tests.
test('it works', function(assert) {
  let PaginationControllerObject = Ember.Object.extend(PaginationControllerMixin)
  let subject = PaginationControllerObject.create()
  assert.ok(subject)
})
