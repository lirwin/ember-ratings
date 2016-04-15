import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    saveRating: function (beerId, rating) {
      console.log('Beer Controller \n', 'beer id: ', beerId, 'beer rating: ', rating)

      this.store.findRecord('beer', beerId).then(function (beer) {
        // ...after the record has loaded
        beer.set('rating', rating)
        beer.save().then(function (beer) {
          console.log('saved beer: ', beer.get('name'))
        }).catch(function (error) {
          console.error(error.message)
        })
      })
    }
  }
})
