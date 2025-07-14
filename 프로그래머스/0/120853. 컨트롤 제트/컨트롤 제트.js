function solution(s) {
    const stack = [];
    const arrayS = s.split(` `);
    
    for (let num of arrayS) {
        if (num === `Z`) {
            stack.pop();
        } else {
            stack.push(Number(num))
        }
    }
    return stack.reduce((arr,crr)=>arr+=crr,0);
}