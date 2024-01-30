const  higherOrderFunction=(callback)=>{
 console.log("In the higherOrderFunction");
 callback();
}
const callback = ()=>{
    console.log("In callback function");
}
higherOrderFunction(callback);