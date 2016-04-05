import Component from 'ember-component'

/**
 * Component to display a full width
 * page header with a title and a subtitle
 *
 * @class TopHeaderComponent
 * @extends Ember.Component
 * @public
 */
export default Component.extend({
  /**
   * HTML tag name of the component
   *
   * @property {String} tagName
   * @default 'header'
   * @public
   */
  tagName: 'header',

  /**
   * Class names of the component
   *
   * @property {String[]} classNames
   * @default [ 'mui--z1' ]
   * @public
   */
  classNames: [ 'mui--z1' ]
})
