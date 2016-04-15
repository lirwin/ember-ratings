import Ember from 'ember'

export function starRated ([starNum, rating]) {
  return parseInt(rating) >= parseInt(starNum)
}

export default Ember.Helper.helper(starRated)
