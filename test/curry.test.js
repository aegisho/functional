'use strict'

const curry = require('../src/curry')
const assert = require('chai').assert

var contain = curry(function(str, what) {
  return str.indexOf(what) > -1
})

describe('curry', function() {
  it('all arguments', function () {
    assert.equal(contain('hello world', 'world'), true)
    assert.equal(contain('hello world', '!'), false)
  })

  it('partial application', function() {
    assert.equal(contain('hello world')('world'), true)
    assert.equal(contain('hello world')('!'), false)
  })
})
