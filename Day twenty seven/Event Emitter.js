class EventEmitter {
    constructor() {
    // Store events and their respective listeners
    this.events = {};
  }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // If the event doesn't exist, create a new array for it
        if (!this.events[eventName]) {
        this.events[eventName] = [];
        }

        // Add the callback to the event's list of listeners
        this.events[eventName].push(callback);
        
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
                // If no more listeners remain, remove the event
                if (this.events[eventName].length === 0) {
                delete this.events[eventName];
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
            // If the event has no listeners, return an empty array
            if (!this.events[eventName]) {
            return [];
            }

            // Call each listener for the event and return their results
            return this.events[eventName].map(callback => callback(...args));
        }
        
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */