/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Initialize a variable to hold the timeout ID
    let timeoutId;

    const delayedExecution = () => {
        console.log(`Function executed at ${t}ms`);
        const result = fn(...args); // Call fn with the provided arguments
        console.log(`Result: ${result}`);
    };

    // Schedule the execution of the function after t milliseconds
    timeoutId = setTimeout(delayedExecution, t)

    return () => {
        console.log(`Function canceled before ${t}ms`);
        clearTimeout(timeoutId); // Clear the timeout to cancel execution
    };
    
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */