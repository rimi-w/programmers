function solution(n) {
    const factorial = (num) => {
        let result = num;
        if (num === 0 || num === 1) return 1;
        while (num > 1) {
            num--;
            result *= num;
        }
        return result;
    }
    
    let num = 0;
    while(factorial(num) <= n) {
        if (factorial(num +1) > n) return num;
        num++;
    }
    return num;
}