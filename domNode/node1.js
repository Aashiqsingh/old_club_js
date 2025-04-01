function addData(){

    let output = document.getElementById("output");

    let h1 = document.createElement("h1")
    h1.innerHTML = "Royal technosoft pvt ltd.";


    let a = document.createElement("a");
    a.innerHTML = "Netflix";
    // a.href = "https://www.netflix.com";
    a.setAttribute("href","https://www.netflix.com")


    let img = document.createElement("img");
    img.src = "../Image/img1.jpg";
    img.style.height = "200px";
    img.style.width = "200px";

    let br = document.createElement("br");



    output.appendChild(h1)
    output.appendChild(a);
    output.appendChild(br);
    output.appendChild(img);

}