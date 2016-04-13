define('ember-ratings/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-ratings/tests/helpers/start-app', 'ember-ratings/tests/helpers/destroy-app'], function (exports, _qunit, _emberRatingsTestsHelpersStartApp, _emberRatingsTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberRatingsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberRatingsTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});