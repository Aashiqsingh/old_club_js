// function demo()
// {
//     console.log("demo function called..");
    
// }

// const pi = 3.14;

// without without
const demo = ()=>{
    console.log("demo function called...");
    
}

// demo()

// 2. without return with argument 

const add = (x,y)=>{
    console.log("Addition = " + (x+y));
    
}

// add(3,4)

// 3. with return without argument

const test = ()=>{
    return "Test function called";
}

// var x = test()
// console.log(x);

// 4. with return with argument

const mul = (a,b,c)=>{
    return a*b*c;
}

var x = mul(2,3,4)
console.log(x);
