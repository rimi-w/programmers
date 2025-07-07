const solution = (order) =>
     [...order.toString()].filter((el) => Number(el) % 3 === 0 && el !== `0`).length;