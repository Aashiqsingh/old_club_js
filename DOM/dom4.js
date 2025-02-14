var box = document.getElementsByClassName("box");

function round(){
    box[3].style.backgroundColor = "red";
    box[3].style.borderRadius = "50%"
}


function simple(){
    box[3].style.backgroundColor = "white";
    box[3].style.borderRadius = "0%"

}


var color = ["red", "green", "yellow", "blue","skyblue","violet"]
const changeColor = ()=>{

    var randomIndex = Math.floor(Math.random() * color.length);
    box[2].style.backgroundColor = color[randomIndex];
}