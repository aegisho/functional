'use strict'

function curry(func) {
  const length = func.length

  return function _curry(...left) {
    if (left.length >= length) {
      return func(...left)
    } else {
      return (...right) => _curry(...left, ...right)
    }
  }
}

module.exports = curry
