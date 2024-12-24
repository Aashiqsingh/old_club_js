function science(fname,per)
{
    return fname + " your addmision confirm in science stream with per " + per
    
}

function commerce(fname,per){
    return fname + " your addmision confirm in commerce stream with per " + per
}

function arts(fname,per){
    return fname + " your addmision confirm in arts stream with per " + per
}

var percentage = 81;
var name = "praful" 
// var name = prompt("Enter your name")

var flag;

if(percentage > 90)
{
    flag = science("rahul",percentage)
}
else if(percentage > 70){
    flag = commerce(name,percentage)
}
else if(percentage > 50){
    flag = arts(name,percentage)
}

console.log(flag);
