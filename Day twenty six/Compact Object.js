/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
    // Process array: filter out falsy values, and recursively compact nested elements.
    return obj.reduce((acc, item) => {
        const compacted = compactObject(item);
        if (Boolean(compacted)) {
            acc.push(compacted);
        }
        return acc;
    }, []);
} else if (typeof obj === 'object' && obj !== null) {
    // Process object: filter out keys with falsy values, and recursively compact nested objects.
    return Object.keys(obj).reduce((acc, key) => {
        const compacted = compactObject(obj[key]);
        if (Boolean(compacted)) {
            acc[key] = compacted;
        }
        return acc;
    }, {});
} else {
    // Base case: return non-falsy values as-is.
    return obj;
} 
};