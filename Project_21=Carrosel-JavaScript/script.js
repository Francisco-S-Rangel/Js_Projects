//Variaveis para que o slide possa acontecer
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const main = document.querySelector(".main");


const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");

//todos os botoes(i) para criação da Tabela de Slide
const btnInglaterra = document.getElementById("inglaterra");
const btnEUA = document.getElementById("eua");
const btnBrasil = document.getElementById("brasil");
const btnFranca = document.getElementById("franca");
const btnCanada = document.getElementById("canada");

//Variaveis para a criação da tabela de Slide
const tabelaslide = document.querySelector(".tabelaslide");
//variaveis para o passar dos slides
const numberOfSlides = slides.length;
var slideNumber = 0;

//Favoritos
const btnfav = document.getElementById("fav-btn");
const btnfav2 = document.getElementById("fav-btn2");
const btnfav3 = document.getElementById("fav-btn3");
const btnfav4 = document.getElementById("fav-btn4");
const btnfav5 = document.getElementById("fav-btn5");
let aux=0,aux2=0,aux3=0,aux4=0,aux5=0;

btnfav.addEventListener("click",()=>{
  if(aux==0){aux++;
  btnfav.classList.add("active");  }
  else{
    aux=0;btnfav.classList.remove("active");
  } 
});
btnfav2.addEventListener("click",()=>{
  if(aux2==0){aux2++;
  btnfav2.classList.add("active");  }
  else{
    aux2=0;btnfav2.classList.remove("active");
  } 
});
btnfav3.addEventListener("click",()=>{
  if(aux3==0){aux3++;
  btnfav3.classList.add("active");  }
  else{
    aux3=0;btnfav3.classList.remove("active");
  } 
});
btnfav4.addEventListener("click",()=>{
  if(aux4==0){aux4++;
  btnfav4.classList.add("active");  }
  else{
    aux4=0;btnfav4.classList.remove("active");
  } 
});
btnfav5.addEventListener("click",()=>{
  if(aux5==0){aux5++;
  btnfav5.classList.add("active");  }
  else{
    aux5=0;btnfav5.classList.remove("active");
  } 
});

//image slider next button(transita no Array de Imagens) para o proximo
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button(Transita no Array de Imagens) para o anterior
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//botão para a criação da tabela inglaterra
btnInglaterra.addEventListener('click',()=>{
  //Limpar tabela
  tabelaslide.innerHTML=``;
  //Inserir Nova Tabela
  tabelaslide.innerHTML= `
              <tr>
                <td class="pais">Inglaterra</td>
                <td>R$ 5800</td>
                <td>Londres</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 6600</td>
                <td>Manchester</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 7200</td>
                <td>Birmingham</td>
              </tr>
   `;
});

//botão para a criação da tabela eua
btnEUA.addEventListener('click',()=>{
  tabelaslide.innerHTML=``;
  //Inserir Nova Tabela
  tabelaslide.innerHTML= `
              <tr>
                <td class="pais">Estados Unidos</td>
                <td>R$ 3600</td>
                <td>Nova York</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 2980</td>
                <td>Miami</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 4200</td>
                <td>Los Angeles</td>
              </tr>
   `;
});

//botão para a criação da tabela brazil
btnBrasil.addEventListener('click',()=>{
  tabelaslide.innerHTML=``;
  //Inserir Nova Tabela
  tabelaslide.innerHTML= `
              <tr>
                <td class="pais">Brasil</td>
                <td>R$ 450</td>
                <td>Brasil</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 620</td>
                <td>Rio de Janeiro</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 760</td>
                <td>Salvador</td>
              </tr>
   `;
});

//botão para a criação da tabela frança
btnFranca.addEventListener('click',()=>{
  tabelaslide.innerHTML=``;
  //Inserir Nova Tabela
  tabelaslide.innerHTML= `
              <tr>
                <td class="pais">França</td>
                <td>R$ 4500</td>
                <td>Paris</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 5200</td>
                <td>Nice</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 7600</td>
                <td>Monaco</td>
              </tr>
   `;
});

//botão para a criação da tabela canda
btnCanada.addEventListener('click',()=>{
  tabelaslide.innerHTML=``;
  //Inserir Nova Tabela
  tabelaslide.innerHTML= `
              <tr>
                <td class="pais">Canada</td>
                <td>R$ 3200</td>
                <td>Toronto</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 4980</td>
                <td>Montreal</td>
              </tr>
              <tr>
                <td></td>
                <td>R$ 5200</td>
                <td>vancouver</td>
              </tr>
   `;
});

//------------------------------------------------------
// Tabela Dinamica
const adicionarBtn = document.getElementById("btn_criar");
const enviarBtn = document.getElementById("btn_enviar");
const msg = document.querySelector(".mensagem");
const tabela = document.querySelector(".tabel");
let validador =0;

adicionarBtn.addEventListener('click',()=>{
  validador++;
    newTr();
});
function newTr(){
    const novoTr = document.createElement('tr');
    novoTr.classList.add('newtr')

    novoTr.innerHTML = `
    <td><input class="text" /></td>
    <td><input type="number" class="text2" /></td>
    <td><input class="text3" /></td>
    <td>
    <button class="editar"><i class="fas fa-edit"></i></button>
    <button class="deletar"><i class="fas fa-trash-alt"></i></button>
    </td>
    `;

    const deleteBtn = novoTr.querySelector('.deletar');
    const editBtn = novoTr.querySelector('.editar');
    const text = novoTr.querySelector('.text');
    const text2 = novoTr.querySelector('.text2');
    const text3 = novoTr.querySelector('.text3');
    
    // Editar o paragrafo da tabela
    editBtn.addEventListener('click',()=>{
         
        if(text.disabled===false){
            text.disabled=true;
            text2.disabled=true;
            text3.disabled=true;
        }else{
            text.disabled=false;
            text2.disabled=false;
            text3.disabled=false;
        }

    });

    deleteBtn.addEventListener('click',()=>{
      validador--;
        novoTr.remove();
    });

  
    tabela.appendChild(novoTr);
}
function apagar(){
  setTimeout(()=> { msg.innerHTML=``;},3000);
}
//Eniar dados da tabela dinamica
enviarBtn.addEventListener('click',()=>{
  console.log(validador);
  if(validador == 0){
    msg.innerHTML=`Dados não foram enviados pois não foram inserido!`;
    apagar();
  }
  else{
  tabela.innerHTML = ``;
  msg.innerHTML=`Dados enviados, Logo entraremos em contato!`;
  apagar();}
  validador=0;
});
