import Ember from 'ember'

export default Ember.Component.extend({
  click () {
    this.attrs.rate()
  },
  mouseEnter () {
    this.attrs.enter(this.get('index'))
  },
  mouseLeave () {
    this.attrs.leave(this.get('index'))
  }
})
