/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;
    
    return function(...args) {
        // Clear the existing timer if the function is called again
        clearTimeout(timer);

        // Set a new timer
        timer = setTimeout(() => {
            fn(...args);  // Execute the function with the provided arguments
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */