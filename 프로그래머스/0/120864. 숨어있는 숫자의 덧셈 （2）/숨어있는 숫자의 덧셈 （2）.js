function solution(my_string) {
    const numbers = my_string.match(/\d+/g);
    let answer = 0; 
    
    if(numbers === null) return 0;
    
    numbers.map((el)=>{
        answer += Number(el)
    })
    
    return answer
}