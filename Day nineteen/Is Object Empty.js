/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Check if the input is an object (not null) and not an array
    if (typeof obj === 'object' && !Array.isArray(obj)) {
        return Object.keys(obj).length === 0;
    }

    // Check if the input is an array
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    // Return false for any other type (not a valid input case as per the problem statement)
    return false;
};