import Component from 'ember-component'
import service   from 'ember-service/inject'

/**
 * Component to display a single thread
 * in a list of threads
 *
 * @class ThreadListItemComponent
 * @extends Ember.Component
 * @public
 */
const ThreadListItemComponent = Component.extend({
  /**
   * Routing service to transition to
   * another route on click
   *
   * @property {Ember.RoutingService} routing
   * @public
   */
  routing: service('-routing'),

  /**
   * Class names of the component
   *
   * @property {String[]} classNames
   * @public
   */
  classNames: [ 'mui-panel' ],

  /**
   * HTML tag name of the component
   *
   * @property {String} tagName
   * @default 'article'
   * @public
   */
  tagName: 'article',

  /**
   * On click event handler
   *
   * Redirects to the detail view of the thread
   *
   * @event click
   * @param {jQuery.Event} e The jquery event
   * @return {void}
   * @public
   */
  click(e) {
    e.preventDefault()

    this.get('routing.router').transitionTo(
      'topic.thread',
      this.get('thread.topic.identifier'),
      this.get('thread.id')
    )
  }
})

ThreadListItemComponent.reopenClass({
  positionalParams: [ 'thread' ]
})

export default ThreadListItemComponent
