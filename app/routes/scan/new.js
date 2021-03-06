import ENV from '../../config/environment';
import Ember from 'ember';


let namespace = ENV.APP.namespace || '';


export default Ember.Route.extend({

  user: Ember.inject.service('user'),

  beforeModel: function (transition) {
    let user = this.get('user');
    let {event, code} = transition.params['scan.new'];

    return user.getId().then(userId => {
      return Ember.$.ajax({
        url: `${namespace}/scan/${event}/${code}`,
        data: { message: 'change this to a post please' },
        method: 'put',
        headers: {
          player: userId
        }
      });
    })
    .then(result => {
      //
      // when the code is a valid scan
      //
      console.log(result);
      this.transitionTo('leader');
    }, error => {
      //
      // when the code is an invalid scan
      //
      let errorResponse = JSON.parse(error.responseText);
      console.error(`Hunter-Server: ${errorResponse.message}`);
      this.transitionTo('scan.notFound', event, code);
    });
  }

});
