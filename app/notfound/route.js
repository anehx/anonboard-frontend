import Route from 'ember-route'

export default Route.extend({
  renderTemplate() {
    this.render({
      outlet: 'error'
    })
  }
})
