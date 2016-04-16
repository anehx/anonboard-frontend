import Component from 'ember-component'

import computed, {
  and
} from 'ember-computed-decorators'

const CommentContentPartComponent = Component.extend({
  tagName: 'span',

  classNameBindings: [ 'isReference:selectable' ],

  @computed('part', 'comment.referenced.[]')
  reference(part, refs) {
    return refs.find(r => {
      return part.replace('@', '') === r.get('id')
    })
  },

  @computed('part')
  hasSchema(part) {
    return Boolean(part.match(/^(@\d+)$/g))
  },

  @and('hasSchema', 'reference')
  isReference: false,

  mouseEnter() {
    if (this.get('isReference')) {
      this.sendAction('on-mouse-enter', this.get('reference'))
    }
  },

  mouseLeave() {
    if (this.get('isReference')) {
      this.sendAction('on-mouse-leave', this.get('reference'))
    }
  }
})

CommentContentPartComponent.reopenClass({
  positionalParams: [ 'part' ]
})

export default CommentContentPartComponent
