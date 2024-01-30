const numbers = [1,2,3,4,5];

const double = numbers.map((num)=> num*2);
console.log("double numbars:", double);

const greaterThantwo = numbers.filter((num) => num > 2);
console.log("greaterThantwo numbars:", greaterThantwo);


const sum = numbers.reduce((accumulator , num) => accumulator+num ,0);
console.log("sum:",sum);
