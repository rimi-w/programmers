function solution(numbers) {
    const stringNum = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`];
    
    stringNum.forEach((word, index)=>{
        numbers = numbers.replaceAll(word,index)
    })
    
    return Number(numbers)
}