/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;
    
    return function(...args) {
        const key = args.length > 1 ? args.join(',') : args[0];
        if (cache.has(key)) {
            return cache.get(key);
        }

        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        return result; 
    };
    
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */