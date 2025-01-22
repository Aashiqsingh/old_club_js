var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true
            },
            {
                name:"axit",
                age:22,
                gender:"male",
                isActive:true
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true
            },
            {
                name:"sunit",
                age:23,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]

var findActiveEmp = departments.find((depart)=> depart.name === "Finance").employees.filter((emp)=> emp.isActive === true)
console.log(findActiveEmp);



// var findFemaleEmp = departments.map((depart)=> depart.employees.filter((emp)=> emp.gender === "female"))
// console.log(findFemaleEmp);




// var x = departments.map((depart)=>{
//     return depart.name
// })

// console.log(x);


// var x = departments.map((depart)=>{
//     return depart.employees.filter((emp)=>{
//         return emp.age > 25
//     })
// })

// console.log(x);

// for(let i=0;i<departments.length;i++)
// {
//     for(let j=0;j<departments[i].employees.length;j++)
//     {
//         if(departments[i].employees[j].age > 25)
//         {
//             console.log(departments[i].employees[j].name);
            
//         }
//     }
// }