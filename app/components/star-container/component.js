import Ember from 'ember'

export default Ember.Component.extend({
  click () {
    const beer = this.get('model')
    this.attrs.rate(beer.id, this.get('index'))
  }
})
