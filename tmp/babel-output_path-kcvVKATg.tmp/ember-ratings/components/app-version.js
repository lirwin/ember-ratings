define('ember-ratings/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-ratings/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberRatingsConfigEnvironment) {

  var name = _emberRatingsConfigEnvironment['default'].APP.name;
  var version = _emberRatingsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});