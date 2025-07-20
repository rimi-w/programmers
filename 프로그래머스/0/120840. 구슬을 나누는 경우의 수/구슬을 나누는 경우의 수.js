function solution(balls, share) {
    const fac = (num1, num2) => {
        let answer = 1;
        let i = 0;
        while ( i < num2) {
            answer *= (num1 - i);
            i++
        }
        return answer;
    }
    return fac(balls, share) / fac(share, share)
}