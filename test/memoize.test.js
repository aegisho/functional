'use strict'

const memoize = require('../src/memoize')
const assert = require('chai').assert

var squareNumber = function(x) {
  squareNumber[x] = (squareNumber[x] || 0) + 1
  return x * x
}

var memoizeSquareNumber = memoize(squareNumber)

describe('memoize', function() {
  it('should equal origin function result', function () {
    assert.equal(squareNumber(4), memoizeSquareNumber(4))
    assert.equal(squareNumber(5), memoizeSquareNumber(5))
  })

  it('cacheable', function() {
    memoizeSquareNumber(10)
    assert.equal(squareNumber[10], 1)
    memoizeSquareNumber(10)
    assert.equal(squareNumber[10], 1)
    squareNumber(10)
    assert.equal(squareNumber[10], 2)
  })
})
