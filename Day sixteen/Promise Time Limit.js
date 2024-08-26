/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // Create a timeout promise that rejects with "Time Limit Exceeded"
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // Race the function execution against the timeout
        return Promise.race([fn(...args), timeoutPromise]);
    };
        
}
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */