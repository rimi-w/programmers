function solution(num_list) {
    const even = num_list.filter((num)=> num%2 ===0)
    return [even.length, num_list.length - even.length] 
}