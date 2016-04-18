import Component from 'ember-component'

import computed, {
  and
} from 'ember-computed-decorators'

/**
 * A part of a comment content
 *
 * Can either represent a normal string
 * or a mentioned comment (@someID)
 *
 * @class CommentContentPartComponent
 * @extends Ember.Component
 * @public
 */
const CommentContentPartComponent = Component.extend({
  /**
   * HTML tag name of the component
   *
   * Span is preferred because it must be
   * inline with other parts
   *
   * @property {String} tagName
   * @default 'span'
   * @public
   */
  tagName: 'span',

  /**
   * The comment
   *
   * @property {Comment} comment
   * @default null
   * @public
   */
  comment: null,

  /**
   * The part of the comment
   *
   * @property {String} part
   * @default ''
   * @public
   */
  part: '',

  /**
   * Class name bindings
   *
   * @property {String[]} classNameBindings
   * @public
   */
  classNameBindings: [ 'isReference:selectable' ],

  /**
   * The reference of this content part
   *
   * @property {Comment} reference
   * @public
   */
  @computed('part', 'comment.referenced.[]')
  reference(part, refs) {
    return refs.find(r => {
      return part.replace('@', '') === r.id
    })
  },

  /**
   * Whether it has the right schema to
   * be a reference (@someID) or not
   *
   * @property {Boolean} hasSchema
   * @public
   */
  @computed('part')
  hasSchema(part) {
    return Boolean(part.match(/^(@\d+)$/g))
  },

  /**
   * Whether the component is a valid
   * reference or not
   *
   * @property {Boolean} isReference
   * @default false
   * @public
   */
  @and('hasSchema', 'reference')
  isReference: false,

  /**
   * Mouse enter action
   *
   * Send action if the component
   * is a reference to highlight the
   * referenced comment
   *
   * @event mouseEnter
   * @param {jQuery.Event} e The mouse enter event
   * @return {void}
   * @public
   */
  mouseEnter(e) {
    e.preventDefault()

    if (this.get('isReference')) {
      this.sendAction('on-mouse-enter', this.get('reference'))
    }
  },

  /**
   * Mouse leave action
   *
   * Send action if the component
   * is a reference to disable the
   * highlighting of the referenced comment
   *
   * @event mouseLeave
   * @param {jQuery.Event} e The mouse leave event
   * @return {void}
   * @public
   */
  mouseLeave(e) {
    e.preventDefault()

    if (this.get('isReference')) {
      this.sendAction('on-mouse-leave', this.get('reference'))
    }
  }
})

CommentContentPartComponent.reopenClass({
  positionalParams: [ 'part' ]
})

export default CommentContentPartComponent
