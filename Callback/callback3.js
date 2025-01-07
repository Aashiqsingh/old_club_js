const science = (option)=>{
    return option.name + " addmision confirm in science with per " + option.per
    
}

const commerce = (option)=>{
    return option.name + " addmision confirm in commerce with per " + option.per
}

const art = (option)=>{
    return option.name + " addmision confirm in art with per " + option.per
}

// cb -- callback 
const addmision = (file , cb)=>{

    var x = cb({name:"rahul",per:file})
    console.log(x);
    
}

var percentage = 71;

if(percentage > 90)
{
    addmision(percentage,science)
}
else if(percentage > 70)
{
    addmision(percentage,commerce)
}
else if(percentage > 50)
{
    addmision(percentage,art)
}