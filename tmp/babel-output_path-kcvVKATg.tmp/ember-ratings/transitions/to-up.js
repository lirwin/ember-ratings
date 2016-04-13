define("ember-ratings/transitions/to-up", ["exports", "ember-ratings/transitions/move-over"], function (exports, _emberRatingsTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _emberRatingsTransitionsMoveOver["default"].call(this, 'y', -1, opts);
  };
});