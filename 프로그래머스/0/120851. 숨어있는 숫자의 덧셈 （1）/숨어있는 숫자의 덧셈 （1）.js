function solution(my_string) {
    var answer = 0;
    for (let i=0; i<my_string.length; i++) {
        let chr = my_string[i];
        if(/[0-9]/.test(chr)) {
            answer += parseInt(chr,10)
        }
    }
    return answer;
}