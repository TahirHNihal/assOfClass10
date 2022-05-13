// # Create an email pattern

let email = "freelancermamun103@gmail.com";
let emailPattern = /^[a-z0-9._-]{1,}@(gmail|yahoo|icloud|outlook)\.com$/;
console.log(emailPattern.test(email));

//# Create a  username pattern

let userName = "tahir_h_nihal_29";
let uNamePatter = /^[a-z0-9_!@#$%^&*]{6,15}/;
console.log(uNamePatter.test(userName));

// # Create a Bangladeshi phone number pattern

let bdNumber = "01911497396";
let bdNumPattern = /^(\+8801|01)[0-9]{9}$/;
console.log(bdNumPattern.test(bdNumber));

// # Create a password pattern

let pass = "tahirpass250";
let passPattern = /^[a-z0-9!@#$%^&*()_+|":;`~]{8,}$/;
console.log(passPattern.test(pass));

// # Create a zipcode pattern

let zipCode = "1230";
let zipCodePattern = /^[0-9]{3,10}$/;
console.log(zipCodePattern.test(zipCode));
