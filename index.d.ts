const Predicate = () => boolean
export function and(...args: (Predicate | boolean)[]): boolean
export function or(...args: (Predicate | boolean)[]): boolean
