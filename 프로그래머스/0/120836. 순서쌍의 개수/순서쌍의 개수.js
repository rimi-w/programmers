const solution = (n) => {
    const numbers = Array.from({length : n}, (_,i) => i+1);
    const answer = numbers.filter((el) => n % el === 0);
    return answer.length;
}