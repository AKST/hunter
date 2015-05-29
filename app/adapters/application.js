import ENV from '../config/environment';
import DS from 'ember-data';

let config = {
  namespace: ''
};

console.log(ENV);

if (typeof ENV.host !== 'undefined') {
  config.host = ENV.host;
}

export default DS.RESTAdapter.extend(config);
