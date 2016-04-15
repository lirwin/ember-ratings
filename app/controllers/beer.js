import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    saveRating: function (beerId, rating) {
      // console.log('Beer Controller \n', 'beer id: ', beerId, 'beer rating: ', rating)

      // const targetBeer = this.store.query('beer', {id: beerId})
      // console.log('target beer: ', targetBeer.get('name'))

      this.set('beerRating', rating)
    }
  }
})
