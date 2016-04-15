import Mirage from 'ember-cli-mirage'

function getRandomBeerId (min, max) {
  return Math.floor(Math.random() * max) + min
}

export default Mirage.Factory.extend({
  'name' (i) {
    return `Beer ${i + 1}`
  },
  'brand': 'Happy Hops',
  'image' () {
    const id = getRandomBeerId(1, 4)

    return 'assets/images/beer-' + id + '.jpg'
  },
  'rating' () {
    return getRandomBeerId(1, 5)
  }
})
