const science = (option)=>option.name + " addmision confirm in science with per " + option.per
    


const commerce = (option)=> option.name + " addmision confirm in commerce with per " + option.per 


const art = (option)=> option.name + " addmision confirm in art with per " + option.per


// cb -- callback 
const addmision = (file , cb)=> cb({name:"chetan",per:file})

    // var x = cb({name:"rahul",per:file})
    

    // return x;

var percentage = 71;
var temp;

if(percentage > 90)
{
    temp = addmision(percentage,science)
}
else if(percentage > 70)
{
    temp = addmision(percentage,commerce)
}
else if(percentage > 50)
{
    temp = addmision(percentage,art)
}
console.log(temp);
