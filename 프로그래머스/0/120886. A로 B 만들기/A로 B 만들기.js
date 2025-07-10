const solution = (before, after) => {
    const arrB = [...before];
    const arrA = [...after];
    
    arrB.map((el)=>{
        for (let i=0; i<arrA.length; i++) {
            if(arrA[i] === el) return arrA.splice(i,1) ;
        }
    })
    return arrA.length === 0 ? 1 : 0;
}
        