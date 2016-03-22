import Component from 'ember-component'

export default Component.extend({
  comment: null,

  actions: {
    add() {
      this.sendAction('on-add', this.get('comment'))
    }
  }
})
