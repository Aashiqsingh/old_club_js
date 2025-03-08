var first = document.getElementById("first");
var second = document.getElementById("second");
second.style.display = "none";
var setPin = 6354;

function btnEnter(){
    var atm = document.getElementsByName("atm")
    console.log(atm);
    

    if(atm[0].checked == true){
        alert("Welcome to Bank of Baroda's ATM..");  
        first.style.display = "none"; 
        second.style.display = "block";
    }
    else{
        alert("Thankyou for visiting bank..");
    }
}

function btnPin(){
    var account = document.getElementById("account").value
    var pin = document.getElementById("pin").value 
    console.log(typeof pin);
    

    if(setPin == pin)
    {
        alert("Pin matched !!!");
        second.style.display = "none";
    }
    else{
        alert("Pin did not match.. Try again..");
    }
}

function btnchoice(){
    var choice = document.getElementsByName("choice")
    // console.log(choice.value);

    

    
    
}