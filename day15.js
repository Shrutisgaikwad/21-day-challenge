const simulatesync =(callback)=>{
    console.log("start of simulatesync");

    setTimeout(() =>{
        console.log("async operation completed");

        callback();
    },3000);
};

const callbackFunction=()=>{
    console.log("callback function after async operation");
};

simulatesync(callbackFunction);