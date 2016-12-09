import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    let parent = params[0];
    let sections = parent.get('_sections') || Ember.A();
    let name = params[1];

    this.set('parent', parent);

    return sections.includes(name);
  },

  onNewSection: Ember.observer('parent._sections.[]', function() {
    this.recompute();
  })

});
