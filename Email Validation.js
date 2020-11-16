console.log("Welcome to Pin and Email Validation");

function validateEmail(emailRegex, email) {
    if (emailRegex.test(email))
        console.log(`${email} is valid.`);
    else throw `${email} is invalid.`;
}

// UC 1
try {
    let emailCheck1 = RegExp('^[a-z]{3,}$');
    validateEmail(emailCheck1, 'abc');
}
catch (e) {
    console.error(e);
}

// UC 2
try {
    let emailCheck2 = RegExp('^[a-z]{3,}?(@[a-z]{2,})$');
    validateEmail(emailCheck2, 'abc@bridgelabz');
}
catch (e) {
    console.error(e);
}

// UC 3
try {
    let emailCheck3 = RegExp('^[a-z]{3,}(.)?(@[a-z]{2,})(.([a-z]{2,}))$');
    validateEmail(emailCheck3, 'abc@bridgelabz.co');
}
catch (e) {
    console.error(e);
}

// UC 4
try {
    let emailCheck4 = RegExp('^[a-z]{3,}(.)([a-z_+-.]{3,})?(@[a-z]{2,})(.([a-z]{2,}))$');
    validateEmail(emailCheck4, 'abc.xyz@bridgelabz.co.in');
}
catch (e) {
    console.error(e);
}

// UC 5
try {
    let emailCheck5 = RegExp('^(abc)+(((\\.[0-9])|(\\+[0-9])|(\\-[0-9])|[0-9]){0,})@[a-z0-9]{1,}(.)(([a-z]{2,}(.))|([a-z]{2,}(,)))[a-z]{0,}');
    validateEmail(emailCheck5, 'abc-100@abc.net');
}
catch (e) {
    console.error(e);
}

try {
    let emailCheck5 = RegExp('^(abc)+(((\\.[0-9])|(\\+[0-9])|(\\-[0-9])|[0-9]){0,})@[a-z0-9]{1,}(.)(([a-z]{2,}(.))|([a-z]{2,}(,)))[a-z]{0,}');
    validateEmail(emailCheck5, 'abc@gmail.com.1a');
}
catch (e) {
    console.error(e);
} 