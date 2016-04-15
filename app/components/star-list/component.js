import Ember from 'ember'

export default Ember.Component.extend({
  // init () {
  //   this._super(...arguments)
  //   const beer = this.get('model')
  //   console.log('starlist beerId: ', beer.id)
  // },
  click () {
    const beer = this.get('model')
    this.attrs.rate(beer.id, beer.get('rating'))
  }
})
