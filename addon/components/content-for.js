import Ember from 'ember';
import layout from '../templates/components/content-for';

const ContentFor = Ember.Component.extend({
  layout,

  tagName: '',

  data: null,
  name: null,

  parent: Ember.computed.readOnly('data.parent'),
  active: Ember.computed.readOnly('data.active'),

  init(...args) {
    this._super(...args);
    let name = this.get('name');
    let parent = this.get('parent');
    let sections = parent.get('_sections') || Ember.A();

    sections.addObject(name);
    parent.set('_sections', sections);
  },

  willDestroy(...args) {
    this._super(...args);

    let name = this.get('name');
    let isActive = this.get('isActive');
    let sections = this.get('parent._sections');

    if (isActive) {
      sections.removeObject(name);
    }
  },

  isActive: Ember.computed('name', 'active', function() {
    let name = this.get('name');
    let active = this.get('active');

    return name === active;
  })

});

ContentFor.reopenClass({
  positionalParams: ['data', 'name']
});

export default ContentFor;
