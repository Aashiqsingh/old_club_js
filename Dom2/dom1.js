// console.log(document.getElementById("txt").innerHTML)

function changeTxt(){
    
    // document.getElementById("txt").innerHTML = "Jinendra trivedi"

    var txt = document.getElementById("txt")
    txt.innerHTML = "Jinendra trivedi"
    txt.style.color = "white"
    txt.style.backgroundColor = "blue"
    txt.style.height = " 200px";
    txt.style.width = "200px";
    txt.style.borderRadius = "50%"

    var btn = document.getElementById("btn");
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.style.height = "50px";
    btn.style.width = "100px";
    
}