define("ember-ratings/transitions/to-down", ["exports", "ember-ratings/transitions/move-over"], function (exports, _emberRatingsTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _emberRatingsTransitionsMoveOver["default"].call(this, 'y', 1, opts);
  };
});