function solution(n) {
    const numbers = Array.from({length : n}, (_, i) => i + 1)
    return numbers.filter((el)=> n % el === 0)
}