function solution(number) {
    var answer = 0;
    for(let student1=0; student1<(number.length - 2); student1++) {
        for(let student2=student1+1; student2<(number.length - 1); student2++){
            for(let student3=student2+1; student3<(number.length); student3++){
                let triple = number[student1] + number[student2] +number[student3];
                if (triple === 0) {
                    answer += 1;
                }
                
            }
        }
    }
    return answer;
}