const solution = (rsp) =>
    rsp.replaceAll(/(2|0|5)/g,(match)=>{
        if(match === `2`) return `0`;
        if(match === `0`) return `5`;
        if(match === `5`) return `2`;
        return match;
    })