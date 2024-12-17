var a = 12;
var b = 7;

var choice = prompt("1 for Add \n2 for Sub \n3 for Mul \n4 for Div \n\n\n Enter your choice :")

switch(choice){

    case '1':
        console.log("Addition = " , a+b);
        break;

    case '2':
        console.log("Subtrcation = " , a-b);
        break;

    case '3':
        console.log("Multiplication = " , a*b);
        break;

    case '4':
        console.log("Division = " , a/b);
        break;

    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
        
        
        
}