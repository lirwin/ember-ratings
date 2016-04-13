define("ember-ratings/transitions/to-left", ["exports", "ember-ratings/transitions/move-over"], function (exports, _emberRatingsTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _emberRatingsTransitionsMoveOver["default"].call(this, 'x', -1, opts);
  };
});