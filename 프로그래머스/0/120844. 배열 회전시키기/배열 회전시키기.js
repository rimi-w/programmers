const solution = (numbers, direction) => {
    switch (direction) {
        case `right` : {
            numbers.unshift(numbers[numbers.length - 1]);
            numbers.pop();
            return numbers
        }break;
        case `left` : {
            numbers.push(numbers[0]);
            numbers.shift();
            return numbers;
        }break;
    };
}