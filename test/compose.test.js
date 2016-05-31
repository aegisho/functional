'use strict'

const compose = require('../src/compose')
const assert = require('chai').assert

const toUpperCase = (x) => x.toUpperCase()
const exclaim = (x) => x + '!'
const shout = compose(exclaim, toUpperCase)

describe('compose', function() {
  it('empty compose', function () {
    assert.equal(compose()('hello'), 'hello')
  })

  it('multiple compose', function() {
    assert.equal(shout('hello'), 'HELLO!')
  })
})
