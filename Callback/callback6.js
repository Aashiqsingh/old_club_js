const singapore = (file)=>{

    return file.name + " your tour confirm in singapore " + file.message
}

const lasvegas = (file)=>{
    return file.name + " your tour confirm in las vegas " + file.message
}

const goa = (file)=>{
    return file.name + " your tour confirm in goa " + file.message
}


const travel = (option,cb)=>{
    return cb({name:"jinendra",message: option + " tickets confirm.."})
}


var budget = 4000;
var temp;

if(budget > 3500)
{
    temp = travel(budget,singapore)
}
else if(budget > 2500)
{
    temp = travel(budget,lasvegas)
}
else if(budget > 1500){
    temp = travel(budget,goa)
}

console.log(temp);
