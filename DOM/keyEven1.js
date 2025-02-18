function text(){

    var txt = document.getElementById("txt")

    console.log(txt.value);

    var output = document.getElementById("output")
    output.innerHTML = txt.value

    if(txt.value.length < 5)
    {
        output.style.color = "red"
        txt.style.outline = "2px solid red"
    }
    else{
        output.style.color = "green"
        txt.style.outline = "2px solid green"
    }

    
}