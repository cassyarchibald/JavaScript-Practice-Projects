var balance = 10.00;
var checkBalance = true;
var isActive = true;

if (checkBalance === false) {
  //check if they actually want to check account balance 
  alert("Thank you, have a nice day");
} else if (checkBalance){ //if they do, check if account is active
  if (isActive === false) {
    alert("Your account is not active!"); //Let them know if account is not active
  } else if (isActive && balance > 0) {
    alert("Your account balance is $" + balance.toFixed(2) + "."); //if active and has balance, give balance info
  } else if (isActive) {
    //check if balance is 0 and account is active
    if (balance === 0) {
      alert("Your account is empty");
    } else if (balance < 0) {
      //if account balance is negative
      alert("Your account balance is negative. Please contact bank.")
    }
  }
}
