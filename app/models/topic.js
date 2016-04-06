import Model from 'ember-data/model'
import attr  from 'ember-data/attr'

import {
  hasMany
} from 'ember-data/relationships'

/**
 * The topic model
 *
 * @class Topic
 * @extends DS.Model
 * @public
 */
export default Model.extend({
  /**
   * The name of the topic
   *
   * @property {String} name
   * @public
   */
  name: attr('string'),

  /**
   * The identifier of the topic
   * (this is used in the url)
   *
   * @property {String} identifier
   * @public
   */
  identifier: attr('string'),

  /**
   * The description of the topic
   *
   * @property {String} description
   * @public
   */
  description: attr('string'),

  /**
   * The amount of threads published
   * in the topic the last 24 hours
   *
   * @property {Number} threadsLastDay
   * @public
   */
  threadsLastDay: attr('number'),

  /**
   * The threads in the topic
   *
   * @property {Thread[]} threads
   * @public
   */
  threads: hasMany('thread')
})
