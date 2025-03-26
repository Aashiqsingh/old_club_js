var images = ["img1.jpg","img2.jpg","img3.avif","img4.avif","img5.avif"];

var prev = document.getElementById("prev")

var currentIndex = 3;
prev.addEventListener("click",()=>{
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
                    //  (5 - 1 + 5) % 5

    var img = document.getElementById("img");
    img.src = "../Image/" + images[currentIndex]

    // console.log(currentIndex);
    
})

var next = document.getElementById("next")
next.addEventListener("click",()=>{
    currentIndex = (currentIndex + 1) % images.length;
                    //  (1 + 1) % 5
    img.src = "../Image/" + images[currentIndex]
})