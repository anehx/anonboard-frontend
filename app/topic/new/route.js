import Route from 'ember-route'

export default Route.extend({
  model() {
    return this.store.createRecord('thread', { topic: this.modelFor('topic') })
  },

  setupController(controller, model) {
    this._super(...arguments)

    controller.set('breadCrumb', 'New thread')
  }
})
