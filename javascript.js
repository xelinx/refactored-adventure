var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChar = "!@#$%^&*/-+";
var userPassword;
var passwordCharSet;
var copyButton = document.getElementsById ("copy");


var passLength = prompt ("How many characters do you want your password to be?");


var lowercase = confirm ("Do you want to include lowercase letters?");
var uppercase = confirm ("Do you want to include uppercase letters?");
var numbers = confirm ("Do you want to include numbers?");
var special = confirm ("Do you want to include special characters?");

function generate () {
    userPassword = "";
    passwordCharSet = "";
    if (lowercase === true) {
        passwordCharSet+= lowerCase;
    }
    if (uppercase === true) {
        passwordCharSet+= upperCase;
    }
    if (numbers === true) {
        passwordCharSet+= number;
    }
    if (special === true) {
        passwordCharSet+= specialChar;
    }
}