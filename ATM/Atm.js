var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
fifth.style.display = "none";
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
        third.style.display = "block";
    }
    else{
        alert("Pin did not match.. Try again..");
    }
}

function checkBal(){
    let avlbal = 35000;
    localStorage.setItem("bal", avlbal);
    let ans = localStorage.getItem("bal")

    return ans;
}

function deposit(value){

        // let x = checkBal()
        // x += parseInt(value)
        var x = localStorage.getItem("bal")
        let ans = parseInt(x) + parseInt(value)
        localStorage.setItem("bal", ans);
    alert("Your account has been successfully deposited..." + ans);    
}

function withdraw(value){
    // let x = checkBal()
    var x = localStorage.getItem("bal")

    if(value < x)
    {
        x -= parseInt(value)
        localStorage.setItem("bal", parseInt(x));
        alert("Your withdraw amount is " + value);
        alert("After withdrwa your amount will be : " + x);
    }
    else{
        alert("Insufficient balance..");
    }

        
}

function btnchoice(){
    var choice = document.getElementsByName("bank")
    console.log(choice);

    if(choice[0].checked == true)
    {
        third.style.display = "none";
        fourth.style.display = "block";
        
    }
    else if(choice[1].checked == true)
    {
        third.style.display = "none";
        fifth.style.display = "block";
    }
    else if(choice[2].checked == true){
        third.style.display = "none";
        let x = checkBal()
        alert("Your available balance is: " + x);
    }
    
    // console.log(choice.value);

 
    
}

function amountBtn(){
    let num = document.getElementById("num");
    deposit(num.value)

}

function withdrawBtn(){

    let num2 = document.getElementById("num2");
    withdraw(num2.value)
}