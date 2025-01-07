function demo()
{
    console.log("demo function called..");
    
}


function test(x){
    // console.log(x);
    x()
    
}

// test(10)
// test(14.6745)
// test("ram")
// test(true)

test(demo)