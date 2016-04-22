import Model    from 'ember-data/model'
import attr     from 'ember-data/attr'
import computed from 'ember-computed-decorators'

import {
  validator,
  buildValidations
} from 'ember-cp-validations'

import {
  hasMany,
  belongsTo
} from 'ember-data/relationships'

export const PREVIEW_LENGTH = 25

const ThreadValidations = buildValidations({
  title: {
    debounce: 500,
    validators: [
      validator('presence', true),
      validator('length', { max: 50 })
    ]
  },

  content: {
    debouce: true,
    validators: [
      validator('presence', true)
    ]
  }
})

/**
 * The thread model
 *
 * @class Thread
 * @extends DS.Model
 * @public
 */
export default Model.extend(ThreadValidations, {
  /**
   * The user who created the thread
   *
   * @property {User} user
   * @public
   */
  user: belongsTo('user'),

  /**
   * The topic of the thread
   *
   * @property {Topic} topic
   * @public
   */
  topic: belongsTo('topic'),

  /**
   * The title of the comment
   *
   * @property {String} title
   * @public
   */
  title: attr('string'),

  /**
   * The content of the thread
   *
   * @property {String} content
   * @public
   */
  content: attr('string'),

  /**
   * The preview of the content (first 25 words)
   *
   * @property {String} preview
   * @public
   */
  @computed('content')
  preview(content) {
    return content.split(' ').splice(0, PREVIEW_LENGTH).join(' ')
  },

  /**
   * The date and time when the thread was created
   *
   * @property {moment} created
   * @public
   */
  created: attr('moment'),

  /**
   * The comments to the thread
   *
   * @property {Comment[]} comments
   * @public
   */
  comments: hasMany('comment')
})
