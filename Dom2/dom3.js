var a = 1;


var colors = ["red", "green", "blue", "alpha", "orange" , "pink"];
const move = ()=>{

    var mydiv = document.getElementById("mydiv");

    var randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);

    mydiv.style.backgroundColor = colors[randomIndex]
    

    // console.log(a++);
    
}