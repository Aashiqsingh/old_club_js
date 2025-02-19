function submitHandler(event)
{

    event.preventDefault();

    var name = document.getElementById("name");
    var output = document.getElementById("output");


    if(name.value == "")
    {
        output.innerHTML = "Name is required*"
        output.style.color = "red"
    }
    else if(name.value.length < 4)
    {
        output.innerHTML = "Name must be at least 4 char.."
        output.style.color = "red"
    }
    else{
        output.innerHTML = name.value 
        output.style.color = "green"
    }

    // console.log(name.value);
    // output.innerHTML = name.value
    

    // alert("Form submitted...");
    console.log("Form submitted...");
    
}