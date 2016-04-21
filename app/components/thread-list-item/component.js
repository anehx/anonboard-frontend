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
  async click(e) {
    e.preventDefault()

    let identifier = await this.get('thread.topic.identifier')
    let id         = await this.get('thread.id')

    this.get('routing.router').transitionTo('topic.thread', identifier, id)
  }
})

ThreadListItemComponent.reopenClass({
  positionalParams: [ 'thread' ]
})

export default ThreadListItemComponent
