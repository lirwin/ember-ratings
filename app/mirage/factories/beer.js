import Mirage from 'ember-cli-mirage'

function getRandomBeerId () {
  return Math.floor(Math.random() * 5) + 1
}

export default Mirage.Factory.extend({
  'name' (i) {
    return `Beer ${i}`
  },
  'brand': 'Happy Hops',
  'image' () {
    const id = getRandomBeerId()

    return 'assets/images/beer-' + id + '.jpg'
  },
  'rating' () {
    return getRandomBeerId()
  }
})
