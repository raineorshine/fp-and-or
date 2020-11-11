/** Wraps a value in a function. If given a function, returns it as-is. */
const wrap = x => typeof x === 'function' ? x : () => x

const and = (...fs) => (...args) =>
  fs.length === 0 || (
    !!wrap(fs[0])(...args) &&
    and(...fs.slice(1))(...args)
  )

const or = (...fs) => (...args) =>
  fs.length > 0 && (
    !!wrap(fs[0])(...args) ||
    or(...fs.slice(1))(...args)
  )

module.exports = { and, or }
