import Component from 'ember-component'
import injectService from 'ember-service/inject'

/**
 * Component to display a single thread
 * in a list of threads
 *
 * @class ThreadListItemComponent
 * @extends Ember.Component
 * @public
 */
export default Component.extend({
  routing: injectService('-routing'),
  /**
   * Class names of the component
   *
   * @property {String[]} classNames
   * @default [ 'mui-panel' ]
   * @public
   */
  classNames: [ 'mui-panel' ],

  /**
   * On click event handler
   *
   * Redirects to the detail view of the thread
   *
   * @event click
   * @param {jQuery.Event} e The jquery event
   * @return {Ember.Transition} The transition object
   * @public
   */
  click(e) {
    e.preventDefault()

    return this.get('routing.router').transitionTo(
      'topic.thread',
      this.get('thread.topic.identifier'),
      this.get('thread.id')
    )
  }
})
