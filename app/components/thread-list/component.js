import Component from 'ember-component'

/**
 * Component to display a (paginated)
 * list of threads
 *
 * @class ThreadListComponent
 * @extends Ember.Component
 * @public
 */
const ThreadListComponent = Component.extend({})

ThreadListComponent.reopenClass({
  positionalParams: [ 'threads' ]
})

export default ThreadListComponent
