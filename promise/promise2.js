// const getData = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 id:102,
//                 message:"Data fethed successfully..."
//             })
//         },5000)
//     })


//     return promise
// }

// let ans = getData()
// // console.log(ans);
// ans.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })



// const getData = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 id:102,
//                 message:"Data fethed successfully..."
//             })
//         },5000)
//     })


//     return promise
// }

// getData().then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            // success({
            //     id:102,
            //     message:"Data fethed successfully..."
            // })
            failure({
                id:101,
                message:"Failed to fetched data......"
            })
        },5000)
    })


    
}

getData().then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})