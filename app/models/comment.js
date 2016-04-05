import Model from 'ember-data/model'
import attr  from 'ember-data/attr'

import {
  belongsTo
} from 'ember-data/relationships'

/**
 * The comment model
 *
 * @class Comment
 * @extends DS.Model
 * @public
 */
export default Model.extend({
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
  content: attr('string'),

  /**
   * The datetime when the comment was created
   *
   * @property {moment} created
   * @public
   */
  created: attr('moment')
})
