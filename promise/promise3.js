const getOrder = ()=>{
    console.log("Order is going to placed....");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:2034,
                amount:499,
                message:"Order placed successfully..."
            })
        },4000)
    })
}


const getPayment = (data)=>{
    console.log("payment is going to completed....");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                amount:data.amount,
                message:"Payment fullfilled successfully..."
            })
        },5000)
    })
}

getOrder().then((res)=>{
    console.log("food order....",res);
    getPayment(res).then((data)=>{
        console.log("payment fullfill....",data);

        console.log("Tankyou....");
        
        
    }).catch((error)=>{
        console.log("error....",error);
        
    })
    
}).catch((err)=>{
    console.log(err);
    
})