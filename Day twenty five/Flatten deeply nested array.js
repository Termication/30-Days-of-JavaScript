/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // Helper function to recursively flatten array
    function flattenArray(arr, depth) {
        let result = [];

        for (let el of arr) {
            // Check if the element is an array and if current depth is less than the maximum allowed depth
            if (Array.isArray(el) && depth < n) {
                // Recursively flatten the array
                result.push(...flattenArray(el, depth + 1));
            } else {
                // If it's not an array or max depth is reached, just add the element to the result
                result.push(el);
            }
        }

        return result;
    }

    // Call the helper function with initial depth of 0
    return flattenArray(arr, 0);
};