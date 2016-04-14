import Component from 'ember-component'
import computed  from 'ember-computed-decorators'

const MAX_COMMENT_LENGTH = 140

export default Component.extend({
  classNames: [ 'mui-row' ],

  maxLenght: MAX_COMMENT_LENGTH,

  comment: '',

  @computed('comment.length', 'maxLenght')
  charsLeft(len, max) {
    return max - len
  },

  actions: {
    add() {
      this.sendAction('on-submit', this.get('comment'))

      this.set('comment', '')
    }
  }
})
