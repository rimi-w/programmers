function solution(my_string) {
    const numbers = my_string.split(` `)
    let answer = Number(numbers[0]);
    
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] === `+`) {
             answer += Number(numbers[i+1]);
        }
        if(numbers[i] === `-`) {
             answer -= Number(numbers[i+1]);
        }
    }
    return answer;
}