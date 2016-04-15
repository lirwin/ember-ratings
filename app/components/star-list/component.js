import Ember from 'ember'

export default Ember.Component.extend({
  init () {
    this._super(...arguments)
    const numStars = 5
    const stars = []
    for (let i = 0; i < numStars; i++) {
      stars.push({index: i})
    }

    this.set('stars', stars)
  }
})
