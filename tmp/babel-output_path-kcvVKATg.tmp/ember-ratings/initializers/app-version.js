define('ember-ratings/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-ratings/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberRatingsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberRatingsConfigEnvironment['default'].APP.name, _emberRatingsConfigEnvironment['default'].APP.version)
  };
});