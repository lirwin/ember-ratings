import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr(),
  brand: DS.attr(),
  image: DS.attr(),
  rating: DS.attr('number')
})
