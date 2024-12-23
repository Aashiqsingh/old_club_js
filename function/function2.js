function science(fname,per)
{
    console.log(fname + " your addmision confirm in science stream with per " + per);
    
}

function commerce(fname,per){
    console.log(fname + " your addmision confirm in commerce stream with per " + per);
}

function arts(fname,per){
    console.log(fname + " your addmision confirm in arts stream with per " + per);
}

var percentage = 81;
// var name = "praful"
var name = prompt("Enter your name")


if(percentage > 90)
{
    science("rahul",percentage)
}
else if(percentage > 70){
    commerce(name,percentage)
}
else if(percentage > 50){
    arts(name,percentage)
}