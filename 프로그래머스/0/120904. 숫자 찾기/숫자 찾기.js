const solution = (num, k) => 
    [...num.toString()].includes(k.toString()) ?
    [...num.toString()].indexOf(k.toString()) + 1 :
    -1;