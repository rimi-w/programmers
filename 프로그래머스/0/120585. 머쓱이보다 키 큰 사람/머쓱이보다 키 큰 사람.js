function solution(array, height) {
    let answer = 0;
    const sortedArray = array.sort((a,b) => b-a );
    for (let i=0; i<sortedArray.length; i++) {
        if (sortedArray[i] > height) {
            answer += 1;
        } else {
            continue;
        }
    }
    return answer;
}