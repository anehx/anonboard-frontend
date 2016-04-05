import Ember from 'ember'
import ComponentRouterInitializer from 'anonboard/initializers/component-router'
import { module, test } from 'qunit'

let application

module('Unit | Initializer | component router', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create()
      application.deferReadiness()
    })
  }
})

test('it works', function(assert) {
  ComponentRouterInitializer.initialize(application)

  assert.ok(true)
})
