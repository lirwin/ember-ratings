define('ember-ratings/app', ['exports', 'ember', 'ember-ratings/resolver', 'ember-load-initializers', 'ember-ratings/config/environment'], function (exports, _ember, _emberRatingsResolver, _emberLoadInitializers, _emberRatingsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberRatingsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberRatingsConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberRatingsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberRatingsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
/*jshint esversion: 6 */