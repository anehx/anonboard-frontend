export default function() {
  this.namespace = 'api'
  this.timing    = 400

  this.get('/v1/topics', ({ topic }, { queryParams }) => {
    return topic.where(getFilterObject(queryParams))
  })
  this.get('/v1/topics/:id')

  this.get('/v1/threads', ({ thread }, { queryParams }) => {
    let topic = queryParams['filter[topic]']

    if (topic) {
      return thread.where({ topicId: topic })
    }

    return thread.all()
  })
  this.post('/v1/threads')
  this.get('/v1/threads/:id')

  this.get  ('/v1/comments')
  this.post ('/v1/comments')
  this.get  ('/v1/comments/:id')
  this.patch('/v1/comments/:id')
}

function getFilterObject(params) {
  return Object.keys(params).reduce((filters, param) => {
    let match = param.match(/filter\[(\w+)\]/)

    if (match[1]) filters[match[1]] = params[param]

    return filters
  }, {})
}
