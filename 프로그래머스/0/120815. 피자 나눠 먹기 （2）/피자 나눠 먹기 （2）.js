function solution(n) {
    for (let pizza = 1; pizza<=100; pizza++) {
        if ((pizza * 6 ) % n === 0) {
            return pizza;
        } else {
            continue;
        }
    }
}