const simulateAsync = async ()=>{
    console.log("start of simulateAsync");

    return new Promise((resolve , reject) =>{

        setTimeout(() =>{
        const success = true;
        if(success){
            console.log("async operation completed");
            resolve();
        }else{
            reject("Error:async operation failed");
        }
    },1000);
    });
};

const runAsyncOperation = async() =>{
    try{
        await simulateAsync();
        console.log("async operation successful");
    }catch(error){
       console.error(error);
    }
};

runAsyncOperation();
