import Component     from 'ember-component'
import computed      from 'ember-computed-decorators'
import injectService from 'ember-service/inject'

const MAX_COMMENT_LENGTH = 255

export default Component.extend({
  classNames: [ 'mui-row' ],

  store: injectService(),

  maxLenght: MAX_COMMENT_LENGTH,

  comment: '',

  @computed('comment', 'maxLenght')
  charsLeft(comment, max) {
    return max - comment.length
  },

  actions: {
    add() {
      this.sendAction('on-submit', this.get('comment'))

      this.set('comment', '')
    }
  }
})
