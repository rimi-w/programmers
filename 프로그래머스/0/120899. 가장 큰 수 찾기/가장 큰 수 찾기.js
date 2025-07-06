const solution = (array) => {
    const max = Math.max(...array);
    for(let i=0; i<array.length; i++) {
        if(array[i] === max) return [max,i];
    }
}