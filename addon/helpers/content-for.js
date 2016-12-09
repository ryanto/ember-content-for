import Ember from 'ember';

export function contentFor(params) {
  let parent = params[0];
  let active = params[1];

  return { parent, active };
}

export default Ember.Helper.helper(contentFor);
