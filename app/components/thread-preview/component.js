import Component from 'ember-component'

export default Component.extend({
  visible: false,

  actions: {
    toggleVisible() {
      this.toggleProperty('visible')
    }
  }
})
