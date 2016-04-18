import Route from 'ember-route'

/**
 * Catch all route - display a 404 page
 *
 * @class NotfoundRoute
 * @extends Ember.Route
 * @public
 */
export default Route.extend({
  /**
   * Render the template into a custom
   * outlet for errors
   *
   * @method renderTemplate
   * @return {void}
   * @public
   */
  renderTemplate() {
    this.render({
      into:   'application',
      outlet: 'error'
    })
  }
})
