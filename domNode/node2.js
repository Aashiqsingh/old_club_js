let body = document.getElementById("mybody")
var colors = ["red","green","blue","yellow","pink","orange","purple","img1.jpg","img2.jpg","img3.avif","img4.avif","img5.avif"];

function get(){


    let div = document.createElement("div")
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.backgroundColor = "red";
    div.addEventListener("mousemove",()=>{
        let randomIndex = Math.floor(Math.random() * colors.length);
        div.style.backgroundColor = colors[randomIndex];
        div.style.backgroundImage = "url(../Image/"+colors[randomIndex]+")";
        div.style.backgroundSize = "cover";
        div.style.height = "400px";
        div.style.width = "400px";
    })


    mybody.appendChild(div)

}

// get()