function solution(n) {
    const answer = [];
    for (let i=1; i<=n; i++){
        if(i%2 !== 0) {
            answer.push(i);
        } else{
            continue;
        }
    }
    return answer;
}