'use strict'

function memoize(func) {
  let cache = {}

  return function() {
    const key = JSON.stringify(arguments)

    if (!cache.hasOwnProperty(key)) {
      cache[key] = func(...arguments)
    }
    return cache[key]
  }
}

module.exports = memoize
