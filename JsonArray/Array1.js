// var student = {
//     roll:1,
//     name:"rahul",
//     isActive: true,
//     age:32,
//     email:"rahul@gmail.com",
// }

var students = [
    {
        roll:1,
        name:"rahul",
        isActive: true,
        age:32,
        email:"rahul@gmail.com"
    },
    {
        roll:2,
        name:"shubham",
        isActive: false,
        age:28,
        email:"shubham@gmail.com"
    }, 
    {
        roll:3,
        name:"aman",
        isActive: true,
        age:25,
        email:"aman@gmail.com"
    }
]

// console.log(students);

// students = students.map((stu)=>{
//     return stu.name.toUpperCase() + " " + stu.age
// })

// console.log(students);

students.forEach((stu)=>{
    if(stu.roll === 3)
    {
        console.log(stu);
        
    }
})

var x = students.filter((stu)=>{
    return stu.roll === 3
})
console.log(x);
