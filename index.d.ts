export function and<T extends any[]>( ...fs: ((...args: T) => boolean)[] ): (...fs: T) => boolean;
export function or<T extends any[]>( ...fs: ((...args: T) => boolean)[] ): (...fs: T) => boolean;
