import Controller from 'ember-controller'

export default Controller.extend({
  queryParams: [ 'page', 'limit', 'sort' ],

  limit: 10,

  sort: 'created',

  page: 1
})
