import ENV from '../config/environment';
import DS from 'ember-data';


export default DS.RESTAdapter.extend({
  namespace: ENV.APP.namespace
});
