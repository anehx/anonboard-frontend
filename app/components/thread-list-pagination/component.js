import Component from 'ember-component'
import computed  from 'ember-computed-decorators'

export default Component.extend({

  @computed('pagination')
  hasPrev(pagination) {
    return pagination.page !== 1
  },

  @computed('pagination')
  hasNext(pagination) {
    return pagination.page !== pagination.pages
  },

  @computed('pagination')
  entries(pagination) {
    let entries = []

    entries.push({
      icon:  'angle-left',
      title: 'Previous page',
      page:  pagination.page - 1
    })

    for (let i = 1; i < pagination.pages + 1; i++) {
      entries.push({
        label:  i,
        title:  `Page ${i}`,
        page:   i,
        active: pagination.page === i
      })
    }

    entries.push({
      icon:  'angle-right',
      title: 'Next page',
      page:  pagination.page + 1
    })

    return entries
  }
})
