var language = ["hindi","englisi","gujarati","hungarian","marathi","french","tamil","urdu"];

// language.forEach((lang)=>{
//     console.log(lang.toUpperCase());
    
// })

// language.forEach((lang)=>{
//     if(lang.length < 7)
//     {
//         console.log(lang);
        
//     }
// })

// map : it will return new Array with same length 

// var x = language.map((l)=>{
//     return l.toUpperCase()
// })

// console.log(x);

// var x = language.map((lang)=>{
//     return lang.length < 7
// })

// console.log(x);

// filter : it will return new array with modified data

// var x = language.filter((lang)=>{
//     return lang.length < 7
// })

// console.log(x);


var arr = []
language.forEach((lang)=>{
    arr.push(lang)

})

console.log(arr);
