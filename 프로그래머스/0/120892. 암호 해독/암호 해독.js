function solution(cipher, code) {
    const decoding = [];
    for(let i=0; i<cipher.length; i++){
        (i+1)%code === 0 ? decoding.push(cipher[i]) : ``
    }
    return decoding.join(``);
}