const checkValidador = document.querySelector(".validador");
const btnValidar = document.querySelector(".btnValidar");
const inputNome = document.querySelector(".nome");
const inputSobrenome = document.querySelector(".sobrenome");
const inputDadosdeContato = document.querySelector(".dadosdecontato");
const avisoNome = document.querySelector(".aviso");
const avisoDados = document.querySelector(".aviso2");
const astA = document.querySelector(".astA");
const astB = document.querySelector(".astB");
const astC = document.querySelector(".astC");
let contador = 0;
let contador2 = 0;

checkValidador.addEventListener('click',()=>{
    if(checkValidador.checked){
         astA.textContent = ` *`;
         astA.style.color = 'red';
         astB.textContent = ` *`;
         astB.style.color = 'red';
         astC.textContent = ` *`;
         astC.style.color = 'red';
    }else{
        avisoNome.textContent = ``;
        avisoDados.textContent= ``;
        astA.textContent = ` `;
        astB.textContent = ` `;
        astC.textContent = ` `;
    }
});
inputNome.addEventListener("keyup",(e)=>{
    if(checkValidador.checked){
    const key = e.key;
    if(key === "Backspace" || key === "Delete"){
        if(contador == 0){}else{contador--;}
    }else{
        contador++;
    }
    if(contador >= 5){
        avisoNome.textContent = ` `;
    }else if(contador == 0){}else{
        avisoNome.textContent = `O campo nome deve ter no mínimo 5 caracteres.`;
        avisoNome.style.color = 'red';
    }}
    console.log(contador);
});
inputDadosdeContato.addEventListener("keyup",(e)=>{
    if(checkValidador.checked){
        const key = e.key;
        if(isFinite(key) || isCharacterALetter(key)){
            contador2++;
        }else if(key === "Backspace" || key === "Delete"){
            contador2--;
        }

    }
});
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}
btnValidar.addEventListener('click',()=>{
    if(checkValidador.checked){
        console.log("checked");
    }else{
        console.log("uncheked");
    }
});
