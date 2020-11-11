/** Wraps a value in a function. If given a function, returns it as-is. */
const wrap = x => typeof x === 'function' ? x : () => x

/** Returns true if all arguments are true or evaluate to true. */
const and = (...fs) => (...args) =>
  fs.length === 0 || (
    !!wrap(fs[0])(...args) &&
    and(...fs.slice(1))(...args)
  )

/** Returns true if at least one argument is true or evaluates to true. */
const or = (...fs) => (...args) =>
  fs.length > 0 && (
    !!wrap(fs[0])(...args) ||
    or(...fs.slice(1))(...args)
  )

module.exports = { and, or }
