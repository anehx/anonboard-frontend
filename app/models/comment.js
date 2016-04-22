import Model from 'ember-data/model'
import attr  from 'ember-data/attr'

import {
  validator,
  buildValidations
} from 'ember-cp-validations'

import {
  hasMany,
  belongsTo
} from 'ember-data/relationships'

export const PREVIEW_LENGTH = 25

const CommentValidations = buildValidations({
  content: {
    debouce: true,
    validators: [
      validator('presence', true),
      validator('length', { max: 140 })
    ]
  }
})

/**
 * The comment model
 *
 * @class Comment
 * @extends DS.Model
 * @public
 */
export default Model.extend(CommentValidations, {
  /**
   * The user who created the thread
   *
   * @property {User} user
   * @public
   */
  user: belongsTo('user'),

  /**
   * The thread of the comment
   *
   * @property {Thread} user
   * @public
   */
  thread: belongsTo('thread'),

  /**
   * The content of the comment
   *
   * @property {String} content
   * @public
   */
  content: attr('string', { defaultValue: '' }),

  /**
   * The datetime when the comment was created
   *
   * @property {moment} created
   * @public
   */
  created: attr('moment')
})
