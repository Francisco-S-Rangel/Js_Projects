const checkValidador = document.querySelector(".validador");
const btnValidar = document.querySelector(".btnValidar");
const inputNome = document.querySelector(".nome");
const inputSobrenome = document.querySelector(".sobrenome");
const inputDadosdeContato = document.querySelector(".dadosdecontato");
const avisoNome = document.querySelector(".aviso");
const avisoSobrenome = document.querySelector(".aviso2");
const avisoDados = document.querySelector(".aviso3");
const astA = document.querySelector(".astA");
const astB = document.querySelector(".astB");
const astC = document.querySelector(".astC");
let contador = 0;
let contador2 = 0;
let contador3 = 0;

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
        avisoSobrenome.textContent = ``;
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
        avisoNome.textContent = `O campo Nome deve ter no mínimo 5 caracteres.`;
        avisoNome.style.color = 'red';
    }}
    console.log(contador);
});
inputSobrenome.addEventListener("keyup",(e)=>{
    if(checkValidador.checked){
        const key = e.key;
        if(key === "Backspace" || key === "Delete"){
            if(contador2 == 0){}else{contador2--;}
        }else{
            contador2++;
        }
        if(contador2 >= 5){
            avisoSobrenome.textContent = ` `;
        }else if(contador2 == 0){}else{
            avisoSobrenome.textContent = `O campo Sobrenome deve ter no mínimo 5 caracteres.`;
            avisoSobrenome.style.color = 'red';
        }}
        console.log(contador2);
});
inputDadosdeContato.addEventListener("keyup",(e)=>{
    if(checkValidador.checked){
        const key = e.key;
        
        if(key === "Backspace" || key === "Delete"){
            if(contador3 == 0){
                avisoDados.textContent = ``;
            }else{contador3--;}
        }else if(isFinite(key) || isCharacterALetter(key)){
            contador3++;
        }else{
            contador3++;
            avisoDados.textContent =  `O campo de Dados só aceita numeros e letras recomeçe o processo apagando tudo desde o inicio!!`;
            avisoDados.style.color = "red";

        }  
        
        if(contador3 == 0){
            avisoDados.textContent = ``;
        }

        console.log(contador3);
    }
});
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}
btnValidar.addEventListener('click',()=>{
    if(checkValidador.checked){
        console.log("checked");
        if( contador >= 5 && contador2 >= 5 && contador3 >=1){
            window.alert("Os tres campos foram respondidos como esperado.\nO Formulario foi validado!");
        }else{
            window.alert("Os tres campos não foram respondidos como esperado.\nO Formulario não foi validado!");
        }
    }else{
        window.alert("O Formulario foi validado no entanto pode conter erros, já que o campo de 'forçar campos obrigatórios' não foi selecionado!!");
    }
});
