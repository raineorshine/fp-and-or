type Predicate<T extends any[]> = (...args: T) => boolean;

export function and<T extends any[]>( ...fs: (Predicate<T>|boolean)[] ): (...fs: T) => boolean;
export function  or<T extends any[]>( ...fs: (Predicate<T>|boolean)[] ): (...fs: T) => boolean;
