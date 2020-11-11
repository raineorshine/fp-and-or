const { and, or } = require('./index.js')

const isEven = n => n % 2 === 0
const isPositive = n => n > 0
const isBig = n => Math.abs(n) >= 1000

describe('and', () => {

  test('should return true with no predicates', () => {
    expect(and()(1)).toBe(true)
  })

  test('should return result of single predicate', () => {
    expect(and(isEven)(1)).toBe(false)
    expect(and(isEven)(2)).toBe(true)
  })

  test('should return logical AND of two predicates', () => {
    const predicates = [isEven, isPositive]
    expect(and(...predicates)(-2)).toBe(false)
    expect(and(...predicates)(-1)).toBe(false)
    expect(and(...predicates)(1)).toBe(false)
    expect(and(...predicates)(2)).toBe(true)
  })

  test('should return logical AND of three predicates', () => {
    const predicates = [isEven, isPositive, isBig]
    expect(and(...predicates)(-2)).toBe(false)
    expect(and(...predicates)(-1)).toBe(false)
    expect(and(...predicates)(1)).toBe(false)
    expect(and(...predicates)(2)).toBe(false)
    expect(and(...predicates)(-1002)).toBe(false)
    expect(and(...predicates)(-1001)).toBe(false)
    expect(and(...predicates)(1001)).toBe(false)
    expect(and(...predicates)(1002)).toBe(true)
  })

})

describe('or', () => {

  test('should return false with no predicates', () => {
    expect(or()(1)).toBe(false)
  })

  test('should return result of single predicate', () => {
    expect(or(isEven)(1)).toBe(false)
    expect(or(isEven)(2)).toBe(true)
  })

  test('should return logical OR of two predicates', () => {
    const predicates = [isEven, isPositive]
    expect(or(...predicates)(-2)).toBe(true)
    expect(or(...predicates)(-1)).toBe(false)
    expect(or(...predicates)(1)).toBe(true)
    expect(or(...predicates)(2)).toBe(true)
  })

  test('should return logical OR of three predicates', () => {
    const predicates = [isEven, isPositive, isBig]
    expect(or(...predicates)(-2)).toBe(true)
    expect(or(...predicates)(-1)).toBe(false)
    expect(or(...predicates)(0)).toBe(true)
    expect(or(...predicates)(1)).toBe(true)
    expect(or(...predicates)(2)).toBe(true)

    expect(or(...predicates)(-1002)).toBe(true)
    expect(or(...predicates)(-1001)).toBe(true)
    expect(or(...predicates)(1001)).toBe(true)
    expect(or(...predicates)(1002)).toBe(true)
  })

})
