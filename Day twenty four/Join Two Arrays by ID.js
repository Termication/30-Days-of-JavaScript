/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Create a map to store the merged objects by their id
    let map = new Map();

    // Helper function to merge two objects by their properties
    function merge(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }

    // Insert all objects from arr1 into the map
    for (let obj of arr1) {
        map.set(obj.id, obj);
    }

    // Merge objects from arr2 with existing ones in the map (or insert them if not present)
    for (let obj of arr2) {
        if (map.has(obj.id)) {
            // If the id exists in both arr1 and arr2, merge the objects
            let mergedObj = merge(map.get(obj.id), obj);
            map.set(obj.id, mergedObj);
        } else {
            // If the id only exists in arr2, simply insert the object
            map.set(obj.id, obj);
        }
    }

    // Convert the map to an array of merged objects
    let result = Array.from(map.values());

    // Sort the result by id in ascending order
    result.sort((a, b) => a.id - b.id);

    return result;

};