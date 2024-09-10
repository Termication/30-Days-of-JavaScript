class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value; // Initialize result with the given value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this; // Return the current instance for method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this; // Return the current instance for method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this; // Return the current instance for method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed"); // Handle division by zero
        }
        this.result /= value;
        return this; // Return the current instance for method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value); // Raise result to the power of value
        return this; // Return the current instance for method chaining
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result; // Return the current result
    }
}