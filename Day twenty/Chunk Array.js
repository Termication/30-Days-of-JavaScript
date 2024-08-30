function chunkArray(arr, size) {
    const result = [];
    
    // Loop through the array with step size 'size'
    for (let i = 0; i < arr.length; i += size) {
        // Slice the array from the current index to index + size
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    
    return result;
}