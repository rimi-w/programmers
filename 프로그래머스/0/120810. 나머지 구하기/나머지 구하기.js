function solution(num1, num2) {
    let answer = 0;
    num2 === 0 ? `나눌 수 없습니다.` : answer = num1 % num2 ;
    return answer;
}