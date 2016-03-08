import Model from 'ember-data/model'
import attr  from 'ember-data/attr'

import {
  hasMany,
  belongsTo
} from 'ember-data/relationships'

/**
 * The thread model
 *
 * @class Thread
 * @extends Ember.Model
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
   * The topic of the thread
   *
   * @property {Topic} topic
   * @public
   */
  topic: belongsTo('topic'),

  /**
   * The title of the comment
   *
   * @property {string} title
   * @public
   */
  title: attr('string'),

  /**
   * The content of the thread
   *
   * @property {string} content
   * @public
   */
  content: attr('string'),

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
