function solution(my_str, n) {
    const newStr = [...my_str];
    const answer = [];

    for (let i=0; i<my_str.length; i+=n) {
        answer.push(my_str.slice(i,i+n))
    }
    return answer;
}