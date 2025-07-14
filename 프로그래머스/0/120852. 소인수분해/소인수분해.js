function solution(n) {
    const answer = [];
    
    for(let i=2; i<n+1; i++){
        n%i === 0 ? answer.push (i) : null;
    }
    
    const prime = (num) => {
        const p = [];
        for(let i=2; i<num; i++){
           num%i === 0 ? p.push(i): p;
        }
        return p;
    }
    
    return answer.map(el=>{
        if(el === 2) return 2;
        if(prime(el).length === 0) return el;
    }).filter(el=>Number(el))
}