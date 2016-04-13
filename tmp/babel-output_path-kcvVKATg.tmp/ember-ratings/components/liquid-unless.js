define('ember-ratings/components/liquid-unless', ['exports', 'ember-ratings/components/liquid-if'], function (exports, _emberRatingsComponentsLiquidIf) {
  exports['default'] = _emberRatingsComponentsLiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });
});