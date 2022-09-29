const saldo = document.getElementById("saldo");
const deposito = document.getElementById("deposito");

saldo.innerHTML = '0';
let contador=0;
let valorSaldo=0;

function digitando(valor){

    if(contador == 3)
    {
        Swal.fire(
            'O valor maximo de deposito é R$999!'
        )
    }else if(contador == 0){
        contador++;
        valorSaldo = valorSaldo + valor;
        valorSaldo = parseInt(valorSaldo);
        deposito.innerHTML = valorSaldo;
    }
    else
    {
        contador++;
        valorSaldo = valorSaldo + valor;
        valorSaldo = parseInt(valorSaldo);
        deposito.innerHTML = valorSaldo;
    }

   
}

function confirma(){
    valorSaldo = parseInt(valorSaldo);
    saldo.innerHTML = valorSaldo;
    deposito.innerHTML = '';
    contador = 0
    valorSaldo = 0;
}
function cancela(){
    deposito.innerHTML = '';
    contador = 0
    valorSaldo = 0;
}
function retirarDinheiro(){
    saldo.innerHTML = '0';
    deposito.innerHTML = '';
    contador = 0
    valorSaldo = 0;
}

const quantidadeProduto = document.getElementById("quantidadeProduto");
quantidadeProduto.innerHTML = '0';
let contador2=0;

function adicionar(){  
    contador2 ++;
    quantidadeProduto.innerHTML = contador2;
}

function sub(){
    if(contador2 <= 0){

    }else{
        contador2 --;
        quantidadeProduto.innerHTML = contador2;
    }
}

const produtoSelecionado = document.getElementById("produtoSelecionado");
produtoSelecionado.innerHTML = '?';

function produto1(){
    produtoSelecionado.innerHTML = 'Barra de Chocolate';
}
function produto2(){
    produtoSelecionado.innerHTML = 'Salgadinho';
}
function produto3(){
    produtoSelecionado.innerHTML = 'Refrigerante';
}
function produto4(){
    produtoSelecionado.innerHTML = 'Bolacha/Biscoito';
}
function produto5(){
    produtoSelecionado.innerHTML = 'Kinder Ovo';
}

const estoque1 = document.getElementById("estoque1");
const estoque2 = document.getElementById("estoque2");
const estoque3 = document.getElementById("estoque3");
const estoque4 = document.getElementById("estoque4");
const estoque5 = document.getElementById("estoque5");
estoque1.innerHTML = 10;
estoque2.innerHTML = 9;
estoque3.innerHTML = 12;
estoque4.innerHTML = 6;
estoque5.innerHTML = 4;