const solution = (s) =>{
    const str = [...s].sort();
    const S = [];
    
    for (let i=0; i<str.length; i++) {
        str[i] === str[i+1] ? S.push(str[i]) : null;
    }
    
    return str.map((el)=>
                   [...new Set(S)].includes(el) ? el.replace(el,``) : el)
        .join(``)
}