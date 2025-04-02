var user = [
    {
        id : 1,
        name:"rahul",
        age: 28,
        email:"rahul@gmail.com",
        gender:"male",
        isActive : true,
    },
    {
        id : 2,
        name:"shubham",
        age: 25,
        email:"shubham@gmail.com",
        gender:"male",
        isActive : true,
    },
    {
        id : 3,
        name:"priya",
        age: 20,
        email:"priya@gmail.com",
        gender:"female",
        isActive : true,
    },
    {
        id : 4,
        name:"ram",
        age: 22,
        email:"ram@gmail.com",
        gender:"male",
        isActive : false,
    },
    {
        id : 5,
        name:"shyam",
        age: 27,
        email:"shyam@gmail.com",
        gender:"male",
        isActive : true,
    }
]


let table1 = document.getElementById("table1");
table1.style.display = "none"

function getData(){
    let tbody = document.getElementById("tbody");
    table1.style.display = "";

    for(let i=0;i<user.length;i++){
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let genderTd = document.createElement("td");
        let isActiveTd = document.createElement("td");
        let actionTd = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerHTML = "DELETE";
        btn.className = "btn btn-danger"
        btn.addEventListener("click",()=>{
            alert(user[i].id)
            let delId = user[i].id

            let newUser = user.filter((user)=>{
                return user.id != delId
            })

            console.log(newUser);
            
            
        })

        idTd.innerHTML = user[i].id;
        nameTd.innerHTML = user[i].name;
        ageTd.innerHTML = user[i].age;
        emailTd.innerHTML = user[i].email;
        genderTd.innerHTML = user[i].gender;
        isActiveTd.innerHTML = user[i].isActive == true ? "Active":"Not Active";


        tbody.appendChild(tr);
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(ageTd);
        tr.appendChild(emailTd);
        tr.appendChild(genderTd);
        tr.appendChild(isActiveTd);
        tr.appendChild(actionTd);
        actionTd.appendChild(btn);
    }
    
}