// var a = 1;

var images = ["img1.jpg","img2.jpg","img3.avif","img4.avif","img5.avif"]

// console.log(images[0]);

const changeImg = ()=>{

    // console.log(a++);

    var randomIndex = Math.floor(Math.random() * images.length);

    console.log(randomIndex);

    var image = document.getElementById("image");

    image.src = "../Image/" + images[randomIndex]
    
    
}