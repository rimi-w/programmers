function solution(n) {
    const numbers = Array.from({length:n},(_,index)=>index+1)
    let answer = 0;
    numbers.filter((el)=>{
        let a = 0;
        for(let i=1; i<el; i++) {
            if(el % i === 0) {
                a++;
            }
        }
        if (a>1) {
            answer++;
        }
    });
    return answer;
}