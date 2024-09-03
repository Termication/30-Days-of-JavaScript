/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    // Create an empty object to store the grouped items
    const grouped = {};

    // Iterate through each element in the array
    for (let item of this) {
        // Apply the function to get the key for grouping
        const key = fn(item);

        // If the key doesn't exist in the grouped object, create a new array
        if (!grouped[key]) {
            grouped[key] = [];
        }

        // Add the current item to the array corresponding to the key
        grouped[key].push(item);
    }

    // Return the grouped object
    return grouped;
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */