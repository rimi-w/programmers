const solution = (s1, s2) => {
    let answer = [];
    for (let i=0; i<s1.length; i++) {
        s2.map((el)=>{
            if (el === s1[i]) {
                return answer.push(el)
            }
        })
    }
    return answer.length;
}