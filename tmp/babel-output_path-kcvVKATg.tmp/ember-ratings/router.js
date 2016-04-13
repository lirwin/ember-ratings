define('ember-ratings/router', ['exports', 'ember', 'ember-ratings/config/environment'], function (exports, _ember, _emberRatingsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberRatingsConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    // this.route('movies');
    this.route('beer');
    // this.route('desserts');
  });

  exports['default'] = Router;
});
/*jshint esversion: 6 */