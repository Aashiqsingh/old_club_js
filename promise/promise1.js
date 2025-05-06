function getData(){

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Fetched data succeffully....");
            // reject("failed to fetched data...")
        },4000)
    })

    console.log(promise);

    promise.then((data)=>{
        console.log(data);
        console.log("Ending fetching data.....");
        
        
    })
    promise.catch((err)=>{
        console.log(err);
        
    })
    

}


getData()