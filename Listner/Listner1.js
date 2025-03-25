var txt = document.getElementById("txt")

txt.addEventListener('click',()=>{
    txt.innerHTML = "Royal technosoft pvt ltd."
})

txt.addEventListener("dblclick",()=>{
    txt.innerHTML = "Royal"
})
txt.addEventListener("mouseover",()=>{
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
})
txt.addEventListener("mouseleave",()=>{
    txt.style.height = "200px";
    txt.style.width = "200px";
})