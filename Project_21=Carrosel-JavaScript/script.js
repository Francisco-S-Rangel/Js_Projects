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
  console.log("Eua");
});

//botão para a criação da tabela brazil
btnBrasil.addEventListener('click',()=>{
  console.log("Brazil");
});

//botão para a criação da tabela frança
btnFranca.addEventListener('click',()=>{
  console.log("França");
});

//botão para a criação da tabela canda
btnCanada.addEventListener('click',()=>{
  console.log("Canada");
});

//------------------------------------------------------
// Tabela Dinamica
const adicionarBtn = document.getElementById("btn_criar");
const tabela = document.querySelector(".tabel");

adicionarBtn.addEventListener('click',()=>{
    newTr();
});
function newTr(){
    const novoTr = document.createElement('tr');
    novoTr.classList.add('newtr')

    novoTr.innerHTML = `
    <td><input class="text" /></td>
    <td><input class="text2" /></td>
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
        novoTr.remove();
    });
  
    tabela.appendChild(novoTr);
}
