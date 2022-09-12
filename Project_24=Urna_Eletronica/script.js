
let candidato = document.getElementById("candidato");
let confirmar = document.getElementById("confirmar");
let corrigir = document.getElementById("corrigir");
let img = document.getElementById("imagem");

let numeroUrna1 = document.getElementById("num-urna1");
let numeroUrna2 = document.getElementById("num-urna2");
let numerosDigitados="";
let contador=0;

let lula =0;
let bolsonaro =0;
let ciro =0;
let trump =0;
let eneas=0;
let putin = 0;
let votoBranco =0;

const candidados = [
    {
        numero:13,
        nome: "lula",
        img: "https://cearamirimnoticias.com.br/wp-content/uploads/2022/04/channels4_profile.jpg"
    },
    {
        numero:22,
        nome: "Bolsonaro",
        img: "https://veja.abril.com.br/wp-content/uploads/2022/09/redetv-redetvnews-jair-bolsonaro.jpg"
    },
    {
        numero:12,
        nome: "Ciro",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ciro_Gomes.jpg"
    },
    {
        numero:45,
        nome: "Trump",
        img: "https://media-manager.noticiasaominuto.com.br/1920/naom_5fb372c71f473.jpg"
    },
    {
        numero:56,
        nome: "Enéas",
        img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/B3ED/production/_97216064_eneas_prona.jpg"
    },
    {
        numero:00,
        nome: "Putin",
        img: "https://s2.glbimg.com/u6LDMi1bK1QS1JqOVJ0x6Bn2bmc=/0x0:3840x2560/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/S/6/1YADemQaaY4jsN2milBA/25f2aa1d6abc429db6c9bc0c32f0e28b-13719.jpg"
    }

]

function corrige(){
    numerosDigitados = "";
    contador = 0;

    img.src= "https://static.fecam.net.br/thumbs/858/2838133_resize_380_600.jpg";
    numeroUrna1.innerHTML = "";
    numeroUrna2.innerHTML = "";
    candidato.style.display = "none";
    confirmar.style.display = "none";
    corrigir.style.display = "none";

}
function branco(){

    corrige();
    
    numeroUrna1.innerHTML = "X";
    numeroUrna2.innerHTML = "X";
    candidato.innerHTML = "Voto em Branco";
    candidato.style.display = "block";
    confirmar.style.display = "block";
    corrigir.style.display = "block";

}
function confirma(){

    if(numerosDigitados == ""){
        votoBranco++;
    }
    else if(numerosDigitados == "13"){
        lula++;
    }else if(numerosDigitados == "22"){
       bolsonaro++;
    }else if(numerosDigitados == "12"){
        ciro++;
    }else if(numerosDigitados == "45"){
       trump++;
    }
    else if(numerosDigitados == "56"){
        eneas++;
    }else if(numerosDigitados == "00"){
        putin++;
    }

    corrige();
    contagemVotos();

    Swal.fire(
        'Voto realizado com sucesso!!.'
    )
}
function contagemVotos(){
    console.log("Lula:",lula);
    console.log("Bolsonaro:",bolsonaro);
    console.log("Ciro:",ciro);
    console.log("Trump:",trump);
    console.log("Enéas:",eneas);
    console.log("Putin:",putin);
    console.log("Votos em Branco:",votoBranco);
}
function digitando(valor){

    if(contador == 0)
    {
    numerosDigitados = numerosDigitados + valor;
    numeroUrna1.innerHTML = valor;
    contador++;
    }else if(contador == 1)
    {
    numerosDigitados = numerosDigitados + valor;
    numeroUrna2.innerHTML = valor;
    candidatoEscolhido();
    }
    else{
        
    }
   
}
function candidatoEscolhido(){
    if(numerosDigitados == "13"){
        img.src="https://cearamirimnoticias.com.br/wp-content/uploads/2022/04/channels4_profile.jpg";
        candidato.innerHTML="Lula";
    }else if(numerosDigitados == "22"){
        img.src="https://veja.abril.com.br/wp-content/uploads/2022/09/redetv-redetvnews-jair-bolsonaro.jpg";
        candidato.innerHTML="Bolsonaro";
    }else if(numerosDigitados == "12"){
        img.src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Ciro_Gomes.jpg";
        candidato.innerHTML="Ciro";
    }else if(numerosDigitados == "45"){
        img.src="https://media-manager.noticiasaominuto.com.br/1920/naom_5fb372c71f473.jpg";
        candidato.innerHTML="Trump";
    }
    else if(numerosDigitados == "56"){
        img.src="https://ichef.bbci.co.uk/news/640/cpsprodpb/B3ED/production/_97216064_eneas_prona.jpg";
        candidato.innerHTML="Enéas";
    }else if(numerosDigitados == "00"){
        img.src="https://s2.glbimg.com/u6LDMi1bK1QS1JqOVJ0x6Bn2bmc=/0x0:3840x2560/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/S/6/1YADemQaaY4jsN2milBA/25f2aa1d6abc429db6c9bc0c32f0e28b-13719.jpg";
        candidato.innerHTML="Putin";
    }else {
        Swal.fire(
            'Não existe um canditado com essa numeração! Verifique o numero do candidato e renicie o processo.'
        )
        corrige();
        return;
    }

    candidato.style.display = "block";
    confirmar.style.display = "block";
    corrigir.style.display = "block";
}