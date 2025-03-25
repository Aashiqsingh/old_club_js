var box = document.getElementsByClassName("box")
console.log(box);

var colors = ["red","green","yellow","blue","purple","pink","orange"];
box[0].addEventListener("mouseenter",()=>{
    box[1].style.backgroundColor = "red"
})

box[0].addEventListener("mouseleave",()=>{
    box[1].style.backgroundColor = "white"
})

box[1].addEventListener("click",()=>{
    box[2].style.backgroundImage = "url('https://www.wbcsd.org/wp-content/uploads/2023/10/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg')";
    box[2].style.backgroundSize = "cover";
})

box[2].addEventListener("mousemove",()=>{
    let randomIndex = Math.floor(Math.random() * colors.length);

    box[0].style.backgroundColor = colors[randomIndex]
})