import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-for', 'Integration | Component | content for', {
  integration: true
});

test('it renders', function(assert) {
  this.set('my-component', {
    parent: Ember.Object.create(),
    active: "test"
  });

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{content-for my-component "test"}}`);

  assert.equal(this.$().text().trim(), '');
});
