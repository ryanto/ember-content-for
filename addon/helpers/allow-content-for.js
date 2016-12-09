import Ember from 'ember';

export function allowContentFor(params/*, hash*/) {
  let parent = params[0];
  let active = "_NO_COMPUTE";

  return { parent, active };
}

export default Ember.Helper.helper(allowContentFor);
