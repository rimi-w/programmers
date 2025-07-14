function solution(array, n) {
    return array.reduce((acc,crr)=>{
        if(Math.abs(acc - n) < Math.abs(crr - n)) return acc;
        if(Math.abs(acc - n) > Math.abs(crr - n)) return crr;
        if(Math.abs(acc - n) === Math.abs(crr - n)) 
            return acc - n <= 0 ? acc : crr;
    },array[0]);
}