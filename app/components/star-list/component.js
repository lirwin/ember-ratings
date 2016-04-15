import Ember from 'ember'

export default Ember.Component.extend({
  numStars: 5,
  init () {
    this._super(...arguments)

    const stars = []
    for (let i = 1; i <= this.numStars; i++) {
      stars.push({index: i})
    }

    this.set('stars', stars)
  },
  actions: {
    enter: function (enteredIndex) {
      this.set('hoverIndex', enteredIndex)
    },
    leave: function (leavingIndex) {
      // no hover index
      this.set('hoverIndex', 0)
    }
  }
})
