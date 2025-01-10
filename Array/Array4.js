var language = ["hindi","englisi","gujarati","hungarian","marathi","french","tamil","urdu"];


// var x = language.every((lang)=>{
//     return lang.length < 5
// })

// console.log(x);

var x = language.every((lang)=>{
    return lang.includes("i")
})
console.log(x);
