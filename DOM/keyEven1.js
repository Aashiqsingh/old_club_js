function text(){

    var txt = document.getElementById("txt")

    console.log(txt.value);

    var output = document.getElementById("output")


    if(txt.value.length == 0)
    {
        document.getElementById("error").innerHTML = "Name is required**"
    }
    else if(txt.value.length < 5)
    {
        output.style.color = "red"
        txt.style.outline = "2px solid red"
    }
    else{
        output.style.color = "green"
        txt.style.outline = "2px solid green"
    }

    
}