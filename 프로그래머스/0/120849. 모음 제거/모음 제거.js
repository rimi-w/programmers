const solution = (my_string) => {
    let string = [...my_string];
    return string.filter((letter) => 
                         letter !== `a` && 
                         letter !== `e` && 
                         letter !== `i` && 
                         letter !== `o` && 
                         letter !== `u`).join(``);
    
}