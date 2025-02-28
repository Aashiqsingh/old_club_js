const submitHandler = ()=>{

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var age = document.getElementById("age")


    // var user = {
    //     name:name.value,
    //     email:email.value,
    //     age:age.value
    // }

    // console.log(user);

    localStorage.setItem("name",name.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("age",age.value)
    



    alert("Form submission..")
}

function getData(){
    var name = localStorage.getItem("name")
    var email = localStorage.getItem("email")
    var age = localStorage.getItem("age")


    var output = document.getElementById("output")

    output.innerHTML = name + " " + email + " " + age
}

function removeData(){

    // localStorage.clear();
    // location.reload()


    localStorage.removeItem("name");


    
}