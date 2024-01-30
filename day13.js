// 6th
const calculateSum =(a, b) =>{
    let sum = a + b ;
    return sum;
}
let result1 = calculateSum(1,2);
console.log("the sum is",result1);

let result2 = calculateSum(5,5);
console.log("the sum is",result2);

// 7th
let person = {
    name: "sharukhan",
    age: 55,
    address: "mumbai"
  };
  const { name, age, address } = person;
  
  console.log(`Person's name: ${name}`);
  console.log(`Person's age: ${age}`);
  console.log(`Person's address: ${address}`);
  
//   8th
  document.addEventListener("DOMContentLoaded",() => {

    const para= document.createElement("p");

    para.textContent = "heyy, this is sharukhan.";

    const dynamicDiv = document.getElementById("dynamicDiv");

    dynamicDiv.appendChild(para);
});

// 9th
const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    console.log("hello my name is sharukhan and i am a superstar");
});


// 10th

const getCurrentDateTime = () =>{
  
    const currentDate = new Date();

    const options = {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const formattedDateTime = currentDate.toLocaleString("en-GB", options);
    console.log("Current Date and Time in Pune, India:", formattedDateTime);
}
getCurrentDateTime();

//11
const validateEmail= (email) => {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    const isValid = emailRegex.test(email);
  
    if (isValid) {
      console.log(`"${email}" is a valid email address.`);
    } else {
      console.log(`"${email}" is invalid email address.`);
    }
  }
  
  validateEmail("eve.doe@gmail.com");
  validateEmail("abc");
  