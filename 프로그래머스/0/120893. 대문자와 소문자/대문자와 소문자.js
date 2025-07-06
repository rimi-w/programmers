const solution = (my_string) => 
    [...my_string].map((el) => 
                       el === el.toUpperCase() ? 
                       el.toLowerCase() : 
                       el.toUpperCase())
                .join(``)
