function lasvegas(option){

    return option.name + " your picnic confirm in llasvegas with package " + option.amount
}

function singapore(option){
    return option.name + " your picnic confirm in singapore with package " + option.amount
}

function newyork(option){
    return option.name + " your picnic confirm in new york with package " + option.amount
}


var budget = 2600;
var firstName = "rahul";
var flag;

if(budget > 3500)
{
    flag = singapore({name:"chetan",amount:budget})
}
else if(budget > 2500)
{
    flag = lasvegas({name:"anil",amount:budget})
}
else if(budget > 1500)
{
    flag = newyork(
        {
            name:firstName,
            amount:budget
        }
    )
}

console.log(flag);

// this is paragraph
