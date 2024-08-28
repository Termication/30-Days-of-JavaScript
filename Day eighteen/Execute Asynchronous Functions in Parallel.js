/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;

        functions.forEach((func, index) => {
        func()
            .then(value => {
            results[index] = value;  // Store the resolved value in the correct order
            resolvedCount++;         // Increment the resolved count

            // If all promises are resolved, resolve the promiseAll
            if (resolvedCount === functions.length) {
                resolve(results);
            }
            })
            .catch(error => {
            // If any promise rejects, reject the entire promiseAll
            reject(error);
            });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */