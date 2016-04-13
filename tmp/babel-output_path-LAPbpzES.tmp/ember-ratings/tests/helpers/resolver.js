define('ember-ratings/tests/helpers/resolver', ['exports', 'ember-ratings/resolver', 'ember-ratings/config/environment'], function (exports, _emberRatingsResolver, _emberRatingsConfigEnvironment) {

  var resolver = _emberRatingsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberRatingsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberRatingsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});