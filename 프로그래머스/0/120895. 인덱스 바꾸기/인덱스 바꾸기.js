const solution = (my_string, num1, num2) => {
    const str = [...my_string]
    let str1 = str[num1];
    let str2 = str[num2];
    str[num1] = str2;
    str[num2] = str1;
    return str.join(``);
}