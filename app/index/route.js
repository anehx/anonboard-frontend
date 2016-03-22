import Route from 'ember-route'

export default Route.extend({
  model() {
    return this.store.query('thread', {
      filter: { sort: 'created', 'page_size': 10 },
      include: 'topic,user,comments'
    })
  }
})
