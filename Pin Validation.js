console.log("Welcome to Pin and Email Validation");

let pinCodeRegex = RegExp('^[1-9]{1}[0-9]{2}(\\s)?[0-9]{3}$');

function validatePinCode(pinCode) {
    if (pinCodeRegex.test(pinCode))
        console.log("Successful!!");
    else throw pinCode + " is invalid.";
}

// UC 1
try {
    validatePinCode('400088');
}
catch (e) {
    console.error(e);
}

// UC 2
try {
    validatePinCode('A400088');
}
catch (e) {
    console.error(e);
}

// UC 3
try {
    validatePinCode('400088B');
}
catch (e) {
    console.error(e);
}

// UC 4
try{
    validatePinCode('400 088');
}
catch (e) {
    console.error(e);
} 