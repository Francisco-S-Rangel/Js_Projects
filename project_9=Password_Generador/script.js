const pwEl = document.getElementById('pw');         
const copyBtn = document.querySelector('.copy');   
const lenghtEl = document.getElementById('lenght');   
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower'); 
const numberEl = document.getElementById('number'); 
const symbolEl = document.getElementById('symbols'); 
const generateBtn = document.querySelector('.generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%&*()-_+=§?/.';

generateBtn.addEventListener('click', generate_password);
function generate_password(){
    const len = lenghtEl.value;
    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}
function getUppercase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}
function getLowercase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}
function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}
function generateX(){
    const Xs = [];
    if(upperEl.checked){
        Xs.push(getUppercase());
    }
    if(lowerEl.checked){
        Xs.push(getLowercase()); 
    }
    if(numberEl.checked){
        Xs.push(getNumber()); 
    }
    if (symbolEl.checked) {
        Xs.push(getSymbol());
    }
    if(Xs.length === 0 ) return " ";
    return Xs[Math.floor(Math.random() * Xs.length)];
}
copyBtn.addEventListener('click',copy_password);
function copy_password(){
    const textarea = document.createElement('textarea');
    const password = pwEl.innerHTML;

    if(!password){return;}

    
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
}
