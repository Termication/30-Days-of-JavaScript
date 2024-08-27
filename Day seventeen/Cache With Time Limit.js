var TimeLimitedCache = function() {
    this.cache = {}; // Object to store key-value pairs with expiration times
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now(); // Get current time in milliseconds
    const expirationTime = currentTime + duration;
    
    // Check if the key exists and hasn't expired yet
    if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
        this.cache[key] = { value: value, expirationTime: expirationTime };
        return true;
    } else {
        this.cache[key] = { value: value, expirationTime: expirationTime };
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now(); // Get current time in milliseconds
    
    if (this.cache[key]) {
        const { value, expirationTime } = this.cache[key];
        if (expirationTime > currentTime) {
            return value;
        } else {
            delete this.cache[key]; // Remove expired key
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now(); // Get current time in milliseconds
    let count = 0;
    
    for (const key in this.cache) {
        if (this.cache[key].expirationTime > currentTime) {
            count++;
        }
    }
    
    return count;
};

/**
 * Example usage:
 * const timeLimitedCache = new TimeLimitedCache();
 * console.log(timeLimitedCache.set(1, 42, 1000)); // false
 * console.log(timeLimitedCache.get(1)); // 42
 * console.log(timeLimitedCache.count()); // 1
 */
