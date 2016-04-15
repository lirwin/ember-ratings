import Ember from 'ember'

export default Ember.Component.extend({
  init: function () {
    this._super(...arguments)
    // const beer = this.get('model')
    // console.log('rating-container beer rating: ', beer.get('rating'))
  },
  actions: {
    onclick: function (param) {
      console.log(param)
    }
  }
})
