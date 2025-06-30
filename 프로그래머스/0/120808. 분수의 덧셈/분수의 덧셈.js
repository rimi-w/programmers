function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;

    if (numer > denom) {
        let gcd1 = gcd(numer, denom);
        numer /= gcd1;
        denom /= gcd1;
        answer =[numer, denom];
    } else {
        let gcd1 = gcd(denom, numer);
        numer /= gcd1;
        denom /= gcd1;
        answer =[numer, denom];
    }
    return answer;
}

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
