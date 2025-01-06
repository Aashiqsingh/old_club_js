const wordHandler = (option)=> option.fname + " your wordHandler file ready.." 


const jpgHandler = (option)=> option.fname + " your jpgHandler file ready.."


const txtHandler = (option)=> option.fname + " your txtHandler file ready.."


const pngHandler = (option)=> option.fname + " your pngHandler file ready.."



var user = "abc.word";
var temp;


if(user.endsWith(".word")){
    temp = wordHandler(
        {
            fname:user,
            size:"1000kb"
        }
    )
}
else if(user.endsWith(".jpg"))
{
    temp = jpgHandler({fname:user,size:"1000kb"})
}
else if(user.endsWith(".txt")){
    temp = txtHandler({fname:user,size:"1000kb"})
}
else if(user.endsWith(".png")){
    temp = pngHandler({fname:user,size:"1000kb"})
}
else{
    console.log("Unsupported file type")
}

console.log(temp);
