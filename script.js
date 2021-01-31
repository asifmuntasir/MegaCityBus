// Get input values using eventlistener
document.getElementById("firstClassInput").addEventListener("input", function () {
    valuesForCalculation();
});

document.getElementById("economyClassInput").addEventListener("input", function () {
    valuesForCalculation();
});



//Get Plus and Minus Sign using eventListener
const firstClassPlusInput = document.getElementById("firstClassPlus");
firstClassPlusInput.addEventListener("click", function () {
    plusSignCalc("firstClassInput", 150);
});

const firstClassMinusInput = document.getElementById("firstClassMinus");
firstClassMinusInput.addEventListener("click", function () {
    minusSignCalc("firstClassInput", 150);
});


const economyClassPlusInput = document.getElementById("economyClassPlus");
economyClassPlusInput.addEventListener("click", function () {
    plusSignCalc("economyClassInput", 100);
});

const economyClassMinusInput = document.getElementById("economyClassMinus");
economyClassMinusInput.addEventListener("click", function () {
    minusSignCalc("economyClassInput", 100);
});




//Function will work when user click '+' sign
//  for both firstClass and economyClass  
function plusSignCalc(bookingClassType, ticketPrice) {
    var incrementValue = getInputValue(bookingClassType);
    incrementValue++;
    document.getElementById(bookingClassType).value = incrementValue;
    valuesForCalculation();
}




//Function will work when user click '-' sign
//  for both firstClass and economyClass  
function minusSignCalc(bookingClassType, ticketPrice) {
    decrementValue = getInputValue(bookingClassType);
    decrementValue--;
    if (decrementValue < 0) {
        return;
    }
    document.getElementById(bookingClassType).value = decrementValue;
    valuesForCalculation();
}



//Function that sets and calculate values in subTotal, vat and total 
function valuesForCalculation() {
    //find Current value from the input field then adding it 
    //with ticketPrice of the current class ticket and Setting it
    var firstClassCurrentValue = getInputValue("firstClassInput");
    var economyClassCurrentValue = getInputValue("economyClassInput");
    
    // calculating subTotal value
    const subTotal = (firstClassCurrentValue * 150) + (economyClassCurrentValue * 100);
    document.getElementById("subTotal").innerText = subTotal;

    //Calculating subTotal with vat and display it 
    const vat = subTotal * 0.10;
    document.getElementById("vat").innerText = vat;

    //Calculating total display it
    const total = subTotal + vat;
    document.getElementById("total").innerText = total;
}




//Function that  returns values from input given by user
function getInputValue(bookingClassType) {
    const currentNumber = document.getElementById(bookingClassType).value;
    if (currentNumber == "") {
        return 0;
    }

    const getNumber = parseFloat(currentNumber);
    if (getNumber < 0) {
        return 0;
    }

    return getNumber;
}



// After Click the Booking Button it will be worked
document.getElementById("bookingBtn").addEventListener("click", function () {
    document.getElementById('beforeBooking').style.display = "none";
    var bookingConfirmation = document.getElementById('afterBooking');
    bookingConfirmation.style.display = "block";


    // get value from startingFrom and destinationTo
    // and set into receiveStartingFrom and receiveDestinationTo
    const startingPlace = document.getElementById('startingFrom').value;
    document.getElementById('receiveStartingFrom').innerText = startingPlace;
    const destinationPlace = document.getElementById('destinationTo').value;
    document.getElementById('receiveDestinationTo').innerText = destinationPlace;


    // get and set departure and return date
    const departureDate = document.getElementById('departureDate').value;
    document.getElementById('receiveDepartureDate').innerText = departureDate;
    const returnDate = document.getElementById('returnDate').value;
    document.getElementById('receiveReturnDate').innerText = returnDate;


    // calculate subtotal, vat and total ticketPrice
    var first_Class_Input = getInputValue("firstClassInput");
    var economy_Class_Input = getInputValue("economyClassInput");
    first_Class_Input = parseFloat(first_Class_Input);
    economy_Class_Input = parseFloat(economy_Class_Input)
    const subTotal = (first_Class_Input * 150 + economy_Class_Input * 100);
    const vat = subTotal * 0.10;
    const total = subTotal + vat;


    // set subtotal, vat and total value in the field
    document.getElementById("receiveFirstClassInput").innerText = first_Class_Input + " * $150";
    document.getElementById("receiveEconomyClassInput").innerText = economy_Class_Input + " * $100";
    document.getElementById("receiveSubTotalValue").innerText = subTotal;
    document.getElementById("receiveVat").innerText = vat;
    document.getElementById("receiveTotalValue").innerText = total;
})

