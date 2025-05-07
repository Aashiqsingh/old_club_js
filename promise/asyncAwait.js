function getData(){



    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data fetched successfully...")
        },4000)
    })

    
}

async function get(){
    console.log("Starting fetching data....");
    
    let x = await getData()
    console.log(x);



    console.log("Ending fetching data....");
    
    
}

get()

