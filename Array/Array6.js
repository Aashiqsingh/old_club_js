var language = ["hindi","english","gujarati","hungarian","marathi","french","tamil","urdu"];


// var x = language.filter((lang)=>{
//     return lang != "french"
// })

// console.log(x);



// const deleteLanguage = (langName)=>{

//     return language.filter((lang)=> lang!= langName)
   
// }

// var zzz = deleteLanguage("tamil")
// console.log(zzz);


const deleteLanguage = (langName)=> language.filter((lang)=> lang!= langName)
console.log(deleteLanguage("urdu"));



// var zzz = deleteLanguage("tamil")
// console.log(zzz);












// const deleteLanguage = (langName)=>{

//     return language.filter((lang)=>{
//         return lang!= langName
//     })
   
// }

// var zzz = deleteLanguage("marathi")
// console.log(zzz);






// const deleteLanguage = (langName)=>{

//     var x = language.filter((lang)=>{
//         return lang!= langName
//     })


//     return x
// }

// var zzz = deleteLanguage("marathi")
// console.log(zzz);
