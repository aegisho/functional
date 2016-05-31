'use strict'

function compose(...funcs) {
  if (funcs.length === 0) {
    return (args) => args
  } else {
    const last = funcs[funcs.length - 1]
    const rest = funcs.slice(0, -1)

    return function(...args) {
      return funcs.reduceRight((prev, current) => current(prev), last(...args))
    }
}

module.exports = compose
