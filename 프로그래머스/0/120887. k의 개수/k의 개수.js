function solution(i, j, k){
    const numbers = Array.from({length:j-i+1},(_,index)=>index+i);
    let answer = 0;
    numbers.map((el)=>{
         [...String(el)].map((num)=>{
            num === String(k) ? answer++ : answer;
        })
    })
    return answer;
}