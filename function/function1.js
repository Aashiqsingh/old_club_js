// function : code reusiblity 
// function  : function keyword
// return : return keyword

// c programming language
// void add(int a , int b){

// }

// int mul(int x){

// }


// javascript : function 

// there are four types of functions
// 1. without return type without argumante 
// 2. without return type with argument 
// 3. with return type without argumante
// 4. with return type with argument

// 1. without return type without argumante 
function demo()
{
    console.log("Demo function called...");
    
}

// demo()

// 2. without return type with argument 

function add(a,b,c,d)
{

    console.log("Addition = ", a+b);
    
}

// add(3,"ram")
// add(3,6)


// 3. with return type without argumante
function test()
{
    return "test function call...." + 10
}

// var x = test()
// console.log(x);

// console.log(test());

// 4. with return type with argument

function mul(x,y)
{
    return "Multiply = " + x*y;
}

var x = mul(3,4)
// console.log("Multiply = ",x);
console.log(x);

