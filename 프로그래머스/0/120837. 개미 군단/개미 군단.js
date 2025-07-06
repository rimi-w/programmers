function solution(hp) {
    let general = ~~(hp/5);
    let soldier = ~~((hp - general*5)/3);
    let work = ~~(hp -(general*5 + soldier*3));
    
    return general + soldier + work;
}