function submitHandler(event){
    event.preventDefault();
    
    var fname = document.getElementById("fname").value 
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value 
    var age = document.getElementById("age").value
    var status = document.getElementById("status").value


    localStorage.setItem("email",email);
    localStorage.setItem("password",pass);

    var user = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: pass,
        age: age,
        status: status
    }

    console.log("user....",user);


    location.href = "./login.html"
    
}


function Login(){

    var setEmail = localStorage.getItem("email");
    var setPass = localStorage.getItem("password");


    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if(email === setEmail && pass === setPass)
    {
        alert("Login Successful");
        location.href = "./dashboard.html"
    }
    else{
        alert("Invalid Credentials");
    }

}