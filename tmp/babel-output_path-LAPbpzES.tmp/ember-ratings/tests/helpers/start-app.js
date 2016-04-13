define('ember-ratings/tests/helpers/start-app', ['exports', 'ember', 'ember-ratings/app', 'ember-ratings/config/environment'], function (exports, _ember, _emberRatingsApp, _emberRatingsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberRatingsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberRatingsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});