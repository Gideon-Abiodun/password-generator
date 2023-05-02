const passwordBox = document.getElementById("password");
const lenght = 10;

const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const allNumber = "0123456789";
const allSymbol = "@#$%^&*()_+~|{}[]<>/-=";

const allCharacters = upperLetter + lowerLetter + allNumber + allSymbol;

function generatePassword(){
    let password = "";
    password += upperLetter[Math.floor(Math.random() * upperLetter.length)];
    password += lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
    password += allNumber[Math.floor(Math.random() * allNumber.length)];
    password += allSymbol[Math.floor(Math.random() * allSymbol.length)];

    while(lenght > password.length){
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}