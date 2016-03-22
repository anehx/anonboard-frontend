import Route from 'ember-route'

export default Route.extend({
  queryParams: {
    limit: { refreshModel: true },
    page:  { refreshModel: true },
    sort:  { refreshModel: true }
  },

  async model(params) {
    let { limit, page, sort } = params

    params.limit = undefined
    params.page  = undefined
    params.sort  = undefined

    let topic = await this.modelFor('topic')

    return this.store.query('thread', {
      page,
      sort,
      filter: { topic: topic.id },
      include: 'user',
      'page_size': limit
    })
  }
})
