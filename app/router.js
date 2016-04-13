/*jshint esversion: 6 */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('movies');
  this.route('beer');
  // this.route('desserts');
});

export default Router;