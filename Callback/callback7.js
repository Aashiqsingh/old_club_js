const pdfHandler = (option)=>{
    return option.fname + " pdf handler help to upload file..."
}

const wordHandler = (option)=>{
    return option.fname + " word handler help to convert file..."
}

const excelHandler = (option)=>{
    return option.fname + " excel handler help to process file..."
}


const Handler = (cb,file)=>{
    var x = cb({fname:file,size:"1000kb"})
    console.log(x);
    
}

var fileName = "abc.word";

if(fileName.endsWith(".pdf")){
    Handler(pdfHandler,fileName)
}
else if(fileName.endsWith(".word")){
    Handler(wordHandler,fileName)
}
else if(fileName.endsWith(".excel")){
    Handler(excelHandler,fileName)
}